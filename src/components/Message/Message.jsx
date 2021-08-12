import './Message.css'
import '../../fonts/inter-3.13/inter-web/inter.css';
import close from '../../images/close.png'
import edit from '../../images/edit.png'
import {useState} from "react";


const Message = ({message, deleteMessage, changeValue, changeMessageText, editMessage}) => {

  const [messageTextForEdit, setMessageTextForEdit] = useState(message.message || message.messageText)
  const [textMessage, setTextMessage] = useState(message.message || message.messageText)
  const [inputActive, setInputActive] = useState(false)
  const visibleIcons = message.user === 3 ? "message-change_active" : ''
  const onDelete=(e) => { e.preventDefault(); deleteMessage(message.id)}
  const onChange=(e) => {
    setMessageTextForEdit(e.target.value)
    console.log('tut', messageTextForEdit)
  }

  const onS=(e) => {
    e.preventDefault()
    setTextMessage(messageTextForEdit)
    setInputActive(false)
  }

  const onEdit = () => {
    setInputActive(true)
  }

  const isInputActive = inputActive ? "message__message-input_active" : ""

  return (
    <div className='message-wrap'>
      <div className='message'>
        <img className='message__avatar' src={message.avatar.url} alt='avatar'/>
        <form className='message__name-message' onSubmit={onS}>
          <p className='message__name'>{message.name}</p>
          <p className='message__message-text' >{textMessage}</p>
          <input className={`message__message-input ${isInputActive}`} type='text'
                 placeholder={message.message || message.messageText}
                 value={messageTextForEdit} onChange={onChange}/>
        </form>
      </div>
      <div className={`message-change ${visibleIcons}`}>
        <button className='message-change__button' onClick={onDelete}>
          <img className='message-change__icon' alt='close_icon' src={close}/>
        </button>
        <button className='message-change__button' onClick={onEdit}>
          <img className='message-change__icon' alt='edit_icon' src={edit}/>
        </button>
      </div>
    </div>

  )
}

export default Message