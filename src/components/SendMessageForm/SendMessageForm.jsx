import './SendMessageForm.css'
import '../../fonts/inter-3.13/inter-web/inter.css';

const SendMessageForm = () => {
  return (
    <div className='send-message'>
      <form className='send-message__form'>
          <input className='send-message__input' placeholder='Введите сообщение' type='text'/>
          <button className='send-message__button'>Отправить</button>
      </form>
    </div>
  )
}

export default SendMessageForm