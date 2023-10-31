import logo from '../../images/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div className="register">
            <Link to='/'><img className='register__logo' src={logo} alt="Логотип"></img></Link>
            <h1 className='register__title'>Добро пожаловать!</h1>
            <form className='register__form'>
                <label className='register__label'>Имя</label>
                <input type="text" className='register__input' required></input>
                <label className='register__label'>E-mail</label>
                <input type="text" className='register__input' required></input>
                <label className='register__label'>Пароль</label>
                <input type="password" className='register__input' required></input>
                <button className='register__submit-btn' type="submit">Зарегистрироваться</button>
                <p className='register__signup'>Уже зарегистрированы? <Link to='/signin' className='register__link'>Войти</Link></p>
            </form>
        </div>
    )
}