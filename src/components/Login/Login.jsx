import './Login.css'
import {Link} from "react-router-dom";
import "../../fonts/inter-3.13/inter-web/inter.css"


const Login = () => {
  return (
    <div className='login'>
      <div className='login__form'>
        <p className='login__form-text'>Рады снова тебя видеть</p>
        <form className='login__input-container'>
          <input className="login__input"
                 type="email"
                 placeholder="Введите email"
                 required name="email"
          />
          <input className="login__input"
                 type="password"
                 name="password"
                 placeholder="Введите пароль"
                 required minLength={7}
                 maxLength={200}
          />
          <button className="login__button">
            <Link className="login__button-link" to='/'>Войти</Link>
          </button>
        </form>
        <div className='login__link'>
          <p className='login__link-text'>Ещё не зарегистрированы?</p>
          <Link to="/signup" className='login__link-text'>Регистрация</Link>
        </div>

      </div>

    </div>
  )
}

export default Login