import './User.css'
import jin from '../../images/jin2.png'
import '../../fonts/inter-3.13/inter-web/inter.css';
import {Link} from "react-router-dom";

const User = (props) => {
  const {page} = props
  const isPageFloodAndWork = `${page === 'flood' ||  page === 'work'? '<- назад' : ''}`
  return (
    <div className='user'>
      <img className='user__avatar' alt='avatar' src={jin}/>
      <p className='user__name'>Джин Казама</p>
      <p className='user__email'>jin@tekken.com</p>
      <button className='user__button'>Выйти</button>
      <Link to='/' className='user__link'>{isPageFloodAndWork}</Link>
    </div>
  )
}

export default User