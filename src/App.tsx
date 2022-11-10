import { useState, useEffect } from 'react';
import ImageUploader from './components/ImageUploader/ImageUploader'
import TextBox1 from './components/TextBoxes/TextBox1'
import TextBox2 from './components/TextBoxes/TextBox2'


function App() {
  const [imageUploaded, setImageUploaded] = useState(false)
  const IMAGE_URL = localStorage.getItem('IMAGE_URL')

  useEffect(() => {
    if (IMAGE_URL) {
      setImageUploaded(true)
    }
  })


  return (
    <div className='container' >
      <ImageUploader setImageUploaded={setImageUploaded} />
      <div className='textboxesWrapper'>
        <TextBox1 imageUploaded={imageUploaded} />
        <TextBox2 imageUploaded={imageUploaded} />
      </div>
    </div>
  );
}

export default App;
