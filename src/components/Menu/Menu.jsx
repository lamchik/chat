import './Menu.css'
import User from "../User/User";
import ChatList from "../ChatsList/ChatList";
import Footer from "../Footer/Footer";

const Menu = () => {
  return (
    <div className='menu'>
      <div>
        <div className='user-wrapper'>
          <User/>
        </div>
        <ChatList/>
      </div>
      <Footer/>
    </div>
  )
}

export default Menu