import { useState } from 'react'
import './ImageUploader.css'
import { useDropzone } from 'react-dropzone';
import UploadIndicator from '../../assets/uploadIndicator.png'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";

const ImageUploader = ({ setImageUploaded }: any) => {
  const IMAGE_URL = localStorage.getItem('IMAGE_URL')
  const [file, setFile] = useState('');
  const [url, setUrl] = useState(IMAGE_URL ? IMAGE_URL : '')

  const fileChange = (images: any) => {
    const fileName = new Date().getTime() + 'photo';
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, images[0]);
    console.log(file)
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrl(downloadURL)
          setImageUploaded(true)
          localStorage.setItem('IMAGE_URL', downloadURL);
          console.log(url);
        });
      }
    );
  };

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg'],
    },
    onDrop: acceptedFiles => {
      fileChange(acceptedFiles)
    }
  });

  return (
    <div className='imageController' >
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <img src={UploadIndicator} className='uploadIndicator' alt='uploadIndicator' />
        <p className='uploadPara'>PNG, JPEG only</p>
      </div>

      {url && <div className="imageContainer">
        <img src={url} alt="Image" />
      </div>}
    </div>
  )
}

export default ImageUploader