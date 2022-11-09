import React, { useState } from 'react';
import './App.css';
import ImageUploader from './components/ImageUploader'
import TextBox1 from './components/TextBox1'
import TextBox2 from './components/TextBox2'
import useLocalstorage from './hooks/useLocalstorage';


function App() {


  const [imageUploaded, setImageUploaded] = useState(false)

 

  return (
    <div className='container' >
      <ImageUploader setImageUploaded={setImageUploaded} />
      <div className='textboxesWrapper'>
        <TextBox1 imageUploaded={imageUploaded} no={1}
    
          />
        <TextBox2 imageUploaded={imageUploaded} no={2} />
      </div>
    </div>
  );
}

export default App;
