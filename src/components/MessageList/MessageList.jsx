import './MessageList.css'
import Message from "../Message/Message";

const MessageList = (props) => {
  const {messages} = props;

  const messagesArray = Array.from(messages).map((message) => (
    <Message key={message.id} message={message}/>
  ));
  console.log("lslslsl", messages)

  return (
    <div className='message-list'>{messagesArray}</div>
  )
};

export default MessageList