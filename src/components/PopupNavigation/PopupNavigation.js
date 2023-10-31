import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Account from '../Account/Account';
import popupClose from '../../images/close.svg';

export default function PopupNavigation() {
    return (
        <div className='popup'>
            <div className='popup__content'>
                <img className='popup__close' src={popupClose} alt="Кнопка закрыть"></img>
                <div className='popup__menu'>
                    <NavLink exact to='/' className='popup__menu-item'>
                        Главная
                    </NavLink>
                    <NavLink to='/movies' className='popup__menu-item'>
                        Фильмы
                    </NavLink>
                    <NavLink to='/saved-movies' className='popup__menu-item'>
                        Сохраненные фильмы
                    </NavLink>
                    <Account />
                </div>
            </div>
        </div>
    )
}
