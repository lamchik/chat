import './ChatList.css'
import '../../fonts/inter-3.13/inter-web/inter.css';
import { Link } from 'react-router-dom';


const ChatList = () => {
  return (
    <div className='chat-list'>
      <Link to='/work' className='chat-list__work'>
        <Link to='/work' className='chat-list__work-text'>Рабочий чат</Link>
      </Link>
      <Link to='/flood' className='chat-list__flood'>
        <Link to='/flood' className='chat-list__flood-text'>Флудилка</Link>
      </Link>
    </div>
  )
}

export default ChatList