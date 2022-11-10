import useLocalstorage from '../../hooks/useLocalstorage'
import './TextBoxes.css'

const TextBox2 = ({ imageUploaded }: any) => {
  const [textBox2, setTextBox2] = useLocalstorage('TEXT_BOX_2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Distinctio nam recusandae fuga consequuntur vel ducimus quos, delectus iste! Quibusdam, libero \n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laborum doloribus officiis ratione numquam, delectus quaerat ad. Animi, perferendis eum. \n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sit ')
  return (
    <div className='textBox ' >
      <div className='textBoxHeader' >
        Text Box
      </div>
      <div className='textBoxBody' >
        <textarea
          onChange={(event) => setTextBox2(event.target.value)}
          rows={9}
          cols={55}
          value={imageUploaded ? textBox2 : ''}
        />

      </div>
      <hr />
    </div>
  )
}

export default TextBox2
