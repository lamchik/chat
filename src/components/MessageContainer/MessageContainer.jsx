import './MessageContainer.css'
import MessageList from '../MessageList/MessageList'
import {createRef, useEffect} from "react";


const MessageContainer = ({messages, deleteMessage, onEdit}) => {
  const messageContainerRef = createRef();

  useEffect(() => {
    messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight
  }, [messageContainerRef]);

  return (
    <div className='message-container' ref={messageContainerRef}>
      <MessageList messages={messages} deleteMessage={deleteMessage}/>
    </div>
  )
}

export default MessageContainer