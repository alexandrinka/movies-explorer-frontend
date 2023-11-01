import React from 'react'
import { NavLink } from 'react-router-dom';
import Account from '../Account/Account';
import popupClose from '../../images/close.svg';

export default function PopupNavigation({ isOpen, onPopupClose }) {
    return (
        <div className={isOpen ? 'popup popup_opened' : 'popup'}>
            <div className='popup__content'>
                <img className='popup__close' src={popupClose} alt="Кнопка закрыть" onClick={onPopupClose}></img>
                <div className='popup__menu'>
                    <NavLink exact to='/' className='popup__menu-item' onClick={onPopupClose}>
                        Главная
                    </NavLink>
                    <NavLink to='/movies' className='popup__menu-item' onClick={onPopupClose}>
                        Фильмы
                    </NavLink>
                    <NavLink to='/saved-movies' className='popup__menu-item' onClick={onPopupClose}>
                        Сохраненные фильмы
                    </NavLink>
                    <Account />
                </div>
            </div>
        </div>
    )
}
