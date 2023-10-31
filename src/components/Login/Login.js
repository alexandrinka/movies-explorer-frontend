import logo from '../../images/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="login">
            <img className='login__logo' src={logo} alt="Логотип"></img>
            <h1 className='login__title'>Рады видеть!</h1>
            <form className='login__form'>
                <label className='login__label'>E-mail</label>
                <input type="text" className='login__input'></input>
                <label className='login__label'>Пароль</label>
                <input type="password" className='login__input'></input>
                <button className='login__submit-btn' type="submit">Войти</button>
                <p className='login__signup'>Ещё не зарегистрированы? <Link to='/signup' className='login__link'>Регистрация</Link></p>
            </form>
        </div>
    )
}