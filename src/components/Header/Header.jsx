import {useLocation} from 'react-router-dom'
import './Header.css'
const Header = () => {
  const location = useLocation()

  const isPageFlood = `${location.pathname === '/flood' ? 'Флудилка' : 'Рабочий чат'}`
  return (
    <header className="header">{isPageFlood}</header>
  )
}

export default  Header