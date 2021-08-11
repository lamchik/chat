import './MessageContainer.css'
import MessageList from '../MessageList/MessageList'
import {createRef, useEffect, useRef} from "react";


const MessageContainer = (props) => {
  const {messages, messageContainer} = props
  // const messagesContainer =createRef();
  //
  // useEffect(() => {
  //   messagesContainer.current.scrollTop = messagesContainer.current.scrollHeight
  // }, [props, messagesContainer]);

  return (
    <div className='message-container' ref={messageContainer}>
      <MessageList
        messages={messages}
      />
    </div>
  )
}

export default MessageContainer