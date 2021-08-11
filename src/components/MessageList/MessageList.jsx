import './MessageList.css'
import Message from "../Message/Message";

const MessageList = (props) => {
  const {messages} = props;

  const messagesArray = Array.from(messages).map((message) => (
    <Message
      message = {message}
    />
  ))
  return (
    <div className='message-list'>{messagesArray}</div>
  )
}

export default MessageList