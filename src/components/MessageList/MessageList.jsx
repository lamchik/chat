import './MessageList.css'
import Message from "../Message/Message";

const MessageList = (props) => {
  const {messages, deleteMessage, onSubmit, changeValue, changeMessageText} = props;

  const messagesArray = Array.from(messages).map((message) => (
    <Message
      key={message.id}
      message={message}
      deleteMessage={deleteMessage}
      changeValue={changeValue}
      changeMessageText={changeMessageText}
      onSubmit={onSubmit}
    />
  ));
  console.log("lslslsl", messages)

  return (
    <div className='message-list'>{messagesArray}</div>
  )
};

export default MessageList