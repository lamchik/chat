import './WelcomePage.css'
import '../../fonts/inter-3.13/inter-web/inter.css';


const WelcomePage = () => {
  return (
    <div className='welcome-page'>
      <h1 className='welcome-page__welcome'>Добро пожаловать, Джин</h1>
      <p className='welcome-page__text'>Это корпоративная сеть компании Tekken для общения с коллегами</p>
      <p className='welcome-page__text'>Чтобы начать общение выбери чат на боковой панели</p>
    </div>

  )
}

export default WelcomePage