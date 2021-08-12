import './Message.css'
import '../../fonts/inter-3.13/inter-web/inter.css';
import close from '../../images/close.png'
import edit from '../../images/edit.png'


const Message = (props) => {
  const {message} = props;

  return (
    <div className='message-wrap'>
      <div className='message'>
        <img className='message__avatar' src={message.avatar.url} alt='avatar'/>
        <div className='message__name-message'>
          <p className='message__name'>{message.name}</p>
          <p className='message__message-text' >{message.message || message.messageText}</p>
        </div>
      </div>
      <div className='message-change'>
        <button className='message-change__button'>
          <img className='message-change__icon' alt='close_icon' src={close}/>
        </button>
        <button className='message-change__button'>
          <img className='message-change__icon' alt='edit_icon' src={edit}/>
        </button>
      </div>
    </div>

  )
}

export default Message