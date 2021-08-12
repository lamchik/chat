import './MessageContainer.css'
import MessageList from '../MessageList/MessageList'
import {createRef, useEffect} from "react";


const MessageContainer = ({messages}) => {
  const messageContainerRef = createRef();

  useEffect(() => {
    messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight
  }, [messageContainerRef]);

  return (
    <div className='message-container' ref={messageContainerRef}>
      <MessageList messages={messages}/>
    </div>
  )
}

export default MessageContainer