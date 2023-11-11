import { useState, useEffect } from "react"
import Header from '../Header/Header';
import { api } from '../../utils/MainApi';
import { useFormWithValidation } from '../../utils/Validation';

export default function Profile({ onPopupOpen, loggedIn, onProfile, infoMessage, currentUser, onSignOut }) {
    const [isEditable, setisEditable] = useState(false);
    const { values, errors, isValid, handleChange } = useFormWithValidation();

    function changeEditable() {
        setisEditable(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onProfile(values.name, values.email);
        setisEditable(false);
    }

    return (
        <>
            <Header onPopupOpen={onPopupOpen} loggedIn={loggedIn} />
            <main className='profile'>
                <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
                <form className="profile__form" onSubmit={handleSubmit}>
                    <div className='profile__info'>
                        <label className='profile__designation' htmlFor="name">Имя</label>
                        <input className={isEditable || infoMessage.isShown ? 'profile__data profile__data_editable' : 'profile__data'}
                            type="text"
                            name="name"
                            value={isEditable || infoMessage.isShown ? values.name || '' : currentUser.name}
                            onChange={handleChange}
                            disabled={!isEditable && !infoMessage.isShown}
                            pattern="^[A-Za-zА-Яа-яЁё \-]+$"
                            required>
                        </input>
                    </div>
                    <span className={errors.name ? 'profile__field-error_active' : ''}>
                        {errors.name === "Введите данные в указанном формате." ? 'Имя должно содержать только латиницу, кириллицу, пробел или дефис' : errors.name}
                    </span>
                    <div className='profile__info'>
                        <label className='profile__designation' htmlFor="email">E-mail</label>
                        <input className={isEditable || infoMessage.isShown ? 'profile__data profile__data_editable' : 'profile__data'}
                            type="text"
                            name="email"
                            value={isEditable || infoMessage.isShown ? values.email || '' : currentUser.email}
                            onChange={handleChange}
                            disabled={!isEditable && !infoMessage.isShown}
                            pattern="^\w+@\w+\.(com|ru)+$"
                            required>
                        </input>
                    </div>
                    <span className={errors.email ? 'profile__field-error_active' : ''}>
                        {errors.email === "Введите данные в указанном формате." ? 'Введите email в формате "example@example.ru"' : errors.email}
                    </span>

                    {isEditable || infoMessage.isShown ? (
                        <div className="profile__button">
                            <p className="profile__error">{infoMessage.code === 500 ? "500 На сервере произошла ошибка." : infoMessage.message}</p>
                            <button
                                className={`profile__save`}
                                type='submit'
                                disabled={!isValid}
                            >
                                Сохранить
                            </button>
                        </div>
                    ) : (
                        <div className="profile__button">
                            <button className='profile__edit' onClick={changeEditable} type="button">Редактировать</button>
                            <button className='profile__exit' type="button" onClick={onSignOut}>Выйти из аккаунта</button>
                        </div>
                    )}
                </form>
            </main >
        </>
    )
}