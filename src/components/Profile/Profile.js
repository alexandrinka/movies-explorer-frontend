import { useState, useEffect } from "react"
import Header from '../Header/Header';
import { api } from '../../utils/MainApi';
import { useFormWithValidation } from '../../utils/Validation';

export default function Profile({ onPopupOpen, loggedIn, onProfile, infoMessage, currentUser, onSignOut }) {
    const [isEditable, setisEditable] = useState(false);
    const { values, errors, isValid, setIsValid, setValues, handleChange } = useFormWithValidation();

    useEffect(() => {
        if (currentUser) {
            setValues({
                name: currentUser.name,
                email: currentUser.email,
            });
        }
    }, [setValues, currentUser]);

    useEffect(() => {
        if (currentUser.name === values.name && currentUser.email === values.email) {
            setIsValid(false);
        }
    }, [setIsValid, values, currentUser]);

    useEffect(() => {
        if (infoMessage.isShown && infoMessage.code === 200) {
            setisEditable(false);
        }
    }, [setisEditable, infoMessage.isShown, infoMessage.code]);

    function changeEditable() {
        setisEditable(true);
        infoMessage.isShown = false;
        infoMessage.message = "";
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onProfile(values.name, values.email);
        setisEditable(false);
        setIsValid(false);
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

                    <p className={infoMessage.code === 200 && infoMessage.type === "profile" && !isEditable ? "profile__error profile__success" : "profile__error"}>
                        {infoMessage.code === 500 && infoMessage.type === "profile" ? "500 На сервере произошла ошибка." : infoMessage.message}
                    </p>

                    {isEditable || (infoMessage.isShown && infoMessage.code !== 200 && infoMessage.type === "profile") ? (
                        <div className="profile__button">
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