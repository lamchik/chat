import './MessageContainer.css'
import MessageList from '../MessageList/MessageList'
import {createRef, useEffect} from "react";


const MessageContainer = (props) => {
  const {messages} = props
  // const messagesContainer =createRef();
  //
  // useEffect(() => {
  //   messagesContainer.current.scrollTop = messagesContainer.current.scrollHeight
  // }, [props, messagesContainer]);

  return (
    <div className='message-container'>
      <MessageList
        messages={messages}
      />
    </div>
  )
}

export default MessageContainer