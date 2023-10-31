import logo from '../../images/logo.svg';
import Navigation from '../../components/Navigation/Navigation';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const currentUrl = useLocation();
    return (
        <header className={currentUrl.pathname === '/' ? "header header_blue" : "header"}>
            <Link to='/' className='header__link'>
                <img className="header__logo" src={logo} alt="Логотип" />
            </Link>
            <Navigation loggedIn={true} />
        </header>
    )
}
