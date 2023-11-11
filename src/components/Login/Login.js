import logo from '../../images/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/Validation';

export default function Login({ onLogin, infoMessage }) {
    const { values, errors, isValid, handleChange } = useFormWithValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(values.email, values.password);
    }

    return (
        <main className="login">
            <Link to='/'><img className='login__logo' src={logo} alt="Логотип"></img></Link>
            <h1 className='login__title'>Рады видеть!</h1>
            <form className='login__form' onSubmit={handleSubmit}>
                <label className='login__label'>E-mail</label>
                <input type="text"
                    pattern="^\w+@\w+\.(com|ru)+$"
                    value={values.email || ''}
                    name="email"
                    className={errors.email ? 'login__input login__input_type_error' : 'login__input'}
                    onChange={handleChange}
                    required>
                </input>
                <span className={errors.email ? 'login__field-error_active' : ''}>
                    {errors.email === "Введите данные в указанном формате." ? 'Введите email в формате "example@example.ru"' : errors.email}
                </span>

                <label className='login__label'>Пароль</label>
                <input type="password"
                    value={values.password || ''}
                    name="password"
                    className={errors.password ? 'login__input login__input_type_error' : 'login__input'}
                    onChange={handleChange}
                    required>
                </input>
                <span className={errors.password ? 'login__field-error_active' : ''}>
                    {errors.password ? errors.password : ''}
                </span>

                <p className='login__error'>{infoMessage.code === 500 ? "500 На сервере произошла ошибка." : infoMessage.message}</p>
                <button className='login__submit-btn' type="submit" disabled={!isValid}>Войти</button>
                <p className='login__signup'>Ещё не зарегистрированы? <Link to='/signup' className='login__link'>Регистрация</Link></p>
            </form>
        </main>
    )
}