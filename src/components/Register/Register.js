import logo from '../../images/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/Validation';

export default function Register({ onRegister, infoMessage }) {
    const { values, errors, isValid, handleChange, setIsValid } = useFormWithValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister(values.name, values.email, values.password);
        setIsValid(false);
    }

    return (
        <main className="register">
            <Link to='/'><img className='register__logo' src={logo} alt="Логотип"></img></Link>
            <h1 className='register__title'>Добро пожаловать!</h1>
            <form className='register__form' onSubmit={handleSubmit}>
                <label className='register__label' htmlFor='name'>Имя</label>
                <input type="text"
                    value={values.name || ''}
                    name="name"
                    className={errors.name ? 'register__input register__input_type_error' : 'register__input'}
                    onChange={handleChange}
                    required
                    pattern="^[A-Za-zА-Яа-яЁё \-]+$">
                </input>
                <span className={errors.name ? 'register__field-error_active' : ''}>
                    {errors.name === "Введите данные в указанном формате." ? 'Имя должно содержать только латиницу, кириллицу, пробел или дефис' : errors.name}
                </span>

                <label className='register__label' htmlFor='email'>E-mail</label>
                <input type="text"
                    value={values.email || ''}
                    name="email"
                    className={errors.email ? 'register__input register__input_type_error' : 'register__input'}
                    onChange={handleChange}
                    required
                    pattern="^\w+@\w+\.(com|ru)+$">
                </input>
                <span className={errors.email ? 'register__field-error_active' : ''}>
                    {errors.email === "Введите данные в указанном формате." ? 'Введите email в формате "example@example.ru"' : errors.email}
                </span>

                <label className='register__label' htmlFor='password'>Пароль</label>
                <input type="password"
                    value={values.password || ''}
                    name="password"
                    className={errors.password ? 'register__input register__input_type_error' : 'register__input'}
                    onChange={handleChange}
                    required>
                </input>
                <span className={errors.password ? 'register__field-error_active' : ''}>
                    {errors.password ? errors.password : ''}
                </span>

                <p className='register__error'>{infoMessage.code === 500 ? "500 На сервере произошла ошибка." : infoMessage.type === "register" ? infoMessage.message : ""}</p>
                <button className='register__submit-btn' type="submit" disabled={!isValid}>Зарегистрироваться</button>
                <p className='register__signup'>Уже зарегистрированы? <Link to='/signin' className='register__link'>Войти</Link></p>
            </form>
        </main>
    )
}