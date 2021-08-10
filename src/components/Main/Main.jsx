import Header from "../Header/Header";
import SendMessageForm from "../SendMessageForm/SendMessageForm";
import './Main.css'
import MessageContainer from "../MessageContainer/MessageContainer";

const Main = () => {
  return (
    <div className='main'>
      <Header/>
      <MessageContainer/>
      <SendMessageForm/>
    </div>
  )
}

export default Main