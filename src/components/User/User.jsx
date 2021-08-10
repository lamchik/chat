import './User.css'
import jin from '../../images/jin2.png'
import '../../fonts/inter-3.13/inter-web/inter.css';

const User = () => {
  return (
    <div className='user'>
      <img className='user__avatar' alt='avatar' src={jin}/>
      <p className='user__name'>Джин Казама</p>
      <p className='user__email'>jin@tekken.com</p>
    </div>
  )
}

export default User