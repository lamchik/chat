import './Menu.css'
import User from "../User/User";
import ChatList from "../ChatsList/ChatList";
import Footer from "../Footer/Footer";

const Menu = (props) => {
const {page} = props
  return (
    <div className='menu'>
      <User
        page={page}
      />
      <ChatList
        page={page}
      />
      <Footer/>
    </div>
  )
}

export default Menu