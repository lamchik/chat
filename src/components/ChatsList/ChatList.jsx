import './ChatList.css'
import '../../fonts/inter-3.13/inter-web/inter.css';
import { Link } from 'react-router-dom';


const ChatList = (props) => {
  const {page} = props
  const isChatFloodActive = `${page === 'flood' ? 'chat-list__flood_active' : ''}`;
  const isChatWorkActive = `${page === 'work' ? 'chat-list__work_active' : ''}`;

  return (
    <div className='chat-list'>
      <Link to='/work' className={`chat-list__work ${isChatWorkActive}`}>
        <Link to='/work' className='chat-list__work-text'>Рабочий чат</Link>
      </Link>
      <Link to='/flood' className={`chat-list__flood ${isChatFloodActive}`}>
        <Link to='/flood' className='chat-list__flood-text'>Флудилка</Link>
      </Link>
    </div>
  )
}

export default ChatList