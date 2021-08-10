import './Menu.css'
import User from "../User/User";
import ChatList from "../ChatsList/ChatList";
import Footer from "../Footer/Footer";

const Menu = () => {
  return (
    <div className='menu'>
      <User/>
      <ChatList/>
      <Footer/>
    </div>
  )
}

export default Menu