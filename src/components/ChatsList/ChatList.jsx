import {useLocation} from 'react-router-dom'
import { Link } from 'react-router-dom';
import './ChatList.css'


const ChatList = () => {
  const location = useLocation()
  const page = location.pathname;

  return (
    <div className='chat-list-wrapper'>
      <Link to='/work' className={`chat-list ${page === '/work' && 'chat-list_active'}`}>
        <span className='chat-list__text'>Рабочий чат</span>
      </Link>
      <Link to='/flood' className={`chat-list ${page === '/flood' && 'chat-list_active'}`}>
        <span className='chat-list__text'>Флудилка</span>
      </Link>
    </div>
  )
}

export default ChatList