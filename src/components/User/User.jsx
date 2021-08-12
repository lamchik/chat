import {useLocation} from 'react-router-dom'
import './User.css'
import jin from '../../images/jin2.png'
import {Link} from "react-router-dom";

const BACK_NOTE = "<- назад"

const User = () => {
  const location = useLocation()
  const page = location.pathname;

  return (
    <div className='user'>
      <img className='user__avatar' alt='avatar' src={jin}/>
      <p className='user__name'>Джин Казама</p>
      <p className='user__email'>jin@tekken.com</p>
      <button className='user__button'>Выйти</button>
      {page !== '/' && <Link to='/' className='user__link'>{BACK_NOTE}</Link>}
    </div>
  )
}

export default User