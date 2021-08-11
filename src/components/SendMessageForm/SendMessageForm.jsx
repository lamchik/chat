import './SendMessageForm.css'
import '../../fonts/inter-3.13/inter-web/inter.css';

const SendMessageForm = (props) => {
  const {changeValue, onChange, onSubmit} = props
  return (
    <div className='send-message'>
      <form className='send-message__form' onSubmit={onSubmit}>
          <input className='send-message__input' placeholder='Введите сообщение' type='text' value={changeValue} onChange={onChange}/>
          <button className='send-message__button'>Отправить</button>
      </form>
    </div>
  )
}

export default SendMessageForm