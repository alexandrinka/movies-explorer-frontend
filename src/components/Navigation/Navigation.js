import React from 'react'
import Account from '../Account/Account';
import { Link, NavLink } from 'react-router-dom';
import menuBurger from '../../images/iconMenuBurger.svg';

export default function Navigation({ loggedIn, onPopupOpen }) {
    return (
        <nav className='navigation'>
            {
                loggedIn ? (
                    <>
                        <div className='navigation__autorized'>
                            <div className='navigation__menu'>
                                <NavLink to='/' className='navigation__menu-item navigation__menu-item_invisible'>
                                    Главная
                                </NavLink>
                                <NavLink to='/movies' className='navigation__menu-item'>
                                    Фильмы
                                </NavLink>
                                <NavLink to='/saved-movies' className='navigation__menu-item'>
                                    Сохраненные фильмы
                                </NavLink>
                            </div>
                            <Account />
                        </div>
                        <div className='navigation__burger'>
                            <img className='navigation__img-burger' onClick={onPopupOpen} src={menuBurger} alt="иконка бургера"></img>
                        </div>
                    </>
                ) : (
                    <div className='navigation__not-autorized'>
                        <Link to='/signup' className='navigation__link'>Регистрация</Link>
                        <Link to='/signin' className='navigation__link navigation__menu-item_signin'>Войти</Link>
                    </div>
                )
            }
        </nav>
    )
}