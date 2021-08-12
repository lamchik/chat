import Header from "../Header/Header";
import SendMessageForm from "../SendMessageForm/SendMessageForm";
import './Main.css'
import MessageContainer from "../MessageContainer/MessageContainer";

const Main = (
  {messages, onSubmit, updateMessageText, messageText, deleteMessage, onEdit}
) => {

  return (
    <div className='main'>
      <Header/>
      <MessageContainer messages={messages} deleteMessage={deleteMessage}/>
      <SendMessageForm
        onChange={updateMessageText}
        changeValue={messageText}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default Main