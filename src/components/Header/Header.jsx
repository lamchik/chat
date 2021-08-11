import './Header.css'
const Header = (props) => {
  const {page} = props

  const isPageFlood = `${page === 'flood' ? 'Флудилка' : 'Рабочий чат'}`
  return (
    <header className="header">{isPageFlood}</header>
  )
}

export default  Header