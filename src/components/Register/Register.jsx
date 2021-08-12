import './Register.css'
import {Link} from "react-router-dom";
import "../../fonts/inter-3.13/inter-web/inter.css"


const Register = () => {
  return (
    <div className='login'>
      <div className='login__form'>
        <p className='login__form-text'>Добро пожаловать!</p>
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
          <input className="login__input"
                 type="text"
                 placeholder="Введите имя"
                 required name="name"
          />
          {/*<input className="login__input"*/}
          {/*       type="text"*/}
          {/*       placeholder="ссылка на картинку"*/}
          {/*       required name="avatar"*/}
          {/*/>*/}
          <button className="login__button">Регистрация</button>
        </form>
        <div className='login__link'>
          <p className='login__link-text'>Уже зарегистрированы?</p>
          <Link to="/signin" className='login__link-text'>Войти</Link>
        </div>

      </div>

    </div>
  )
}

export default Register