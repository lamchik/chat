import Header from "../Header/Header";
import SendMessageForm from "../SendMessageForm/SendMessageForm";
import './Main.css'
import MessageContainer from "../MessageContainer/MessageContainer";

const Main = (
  {messages, onSubmit, updateMessageText, messageText, deleteMessage, changeMessageText, sendMessageText, onEdit}
) => {

  return (
    <div className='main'>
      <Header/>
      <MessageContainer
        messages={messages}
        deleteMessage={deleteMessage}
        changeValue={sendMessageText}
        changeMessageText={changeMessageText}
        onSubmit={onSubmit}
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