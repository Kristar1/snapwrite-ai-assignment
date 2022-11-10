import useLocalstorage from '../../hooks/useLocalstorage'
import './TextBoxes.css'

const TextBox1 = ({ imageUploaded }: any) => {
  const [textBox1, setTextBox1] = useLocalstorage('TEXT_BOX_1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Distinctio nam recusandae fuga consequuntur vel ducimus quos, delectus iste! Quibusdam, libero \n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laborum doloribus officiis ratione numquam, delectus quaerat ad. Animi, perferendis eum. \n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sit ')
  return (
    <div className='textBox ' >
      <div className='textBoxHeader' >
        Text Box
      </div>
      <div className='textBoxBody' >
        <textarea
          onChange={(event) => setTextBox1(event.target.value)}
          rows={9}
          cols={55}
          value={imageUploaded ? textBox1 : ''}
        />
      </div>
      <hr />
    </div>
  )
}

export default TextBox1
