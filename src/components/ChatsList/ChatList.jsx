import './ChatList.css'
import '../../fonts/inter-3.13/inter-web/inter.css';

const ChatList = () => {
  return (
    <div className='chat-list'>
      <div className='chat-list__work'>
        <p className='chat-list__work-text'>Рабочий чат</p>
      </div>
      <div className='chat-list__flood'>
        <p className='chat-list__flood-text'>Флудилка</p>
      </div>
    </div>
  )
}

export default ChatList