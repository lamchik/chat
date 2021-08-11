import Header from "../Header/Header";
import SendMessageForm from "../SendMessageForm/SendMessageForm";
import './Main.css'
import MessageContainer from "../MessageContainer/MessageContainer";
import {useState} from "react";

const Main = (props) => {
  const {messages, page, onSubmit, updateMessageText, messageText, messageContainer} = props

  return (
    <div className='main'>
      <Header
        page = {page}
      />
      <MessageContainer
        messages={messages}
        messageContainer={messageContainer}
      />
      <SendMessageForm
        onChange={updateMessageText}
        changeValue={messageText}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default Main