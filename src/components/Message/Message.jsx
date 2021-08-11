import './Message.css'
import mishima from '../../images/mishima.png'
import '../../fonts/inter-3.13/inter-web/inter.css';


const Message = (props) => {
  const {message} = props;

  return (
    <div className='message'>
      <img className='message__avatar' src={message.avatar.url} alt='avatar'/>
      <div className='message__name-message'>
        <p className='message__name'>{message.name}</p>
        <p className='message__message-text'>{message.message}</p>
      </div>
    </div>
  )
}

export default Message