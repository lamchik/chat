import Header from "../Header/Header";
import SendMessageForm from "../SendMessageForm/SendMessageForm";
import './Main.css'
import MessageContainer from "../MessageContainer/MessageContainer";

const Main = (props) => {
  const {messages, page} = props
  return (
    <div className='main'>
      <Header
        page = {page}
      />
      <MessageContainer
        messages={messages}
      />
      <SendMessageForm/>
    </div>
  )
}

export default Main