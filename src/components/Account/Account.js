import profile from '../../images/profile.svg';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Account() {
    const currentUrl = useLocation();
    return (
        <Link to='/profile' className='account__link'>
            <div className={(currentUrl.pathname === '/') ? "account account_blue": "account"}>
                <p className='account__text'>Аккаунт</p>
                <div className={(currentUrl.pathname === '/') ? "account__circle account__circle_blue": "account__circle"}>
                    <img className="account__icon" src={profile} alt="Профиль" />
                </div>
            </div>
        </Link>
    )
}