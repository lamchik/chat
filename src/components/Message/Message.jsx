import './Message.css'
import mishima from '../../images/mishima.png'
import '../../fonts/inter-3.13/inter-web/inter.css';


const Message = () => {
  return (
    <div className='message'>
      <img className='message__avatar' src={mishima} alt='avatar'/>
      <div className='message__name-message'>
        <p className='message__name'>Хейхачи Мишима</p>
        <p className='message__message-text'>Всем привет!</p>
      </div>
    </div>
  )
}

export default Message