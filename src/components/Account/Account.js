import profile from '../../images/profile.svg';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Account() {
    const currentUrl = useLocation();
    return (
        <Link to='/profile' className='account'>
            <div className={(currentUrl.pathname === '/') ? "account__content account__content_blue": "account__content"}>
                <p className='account__text'>Аккаунт</p>
                <div className={(currentUrl.pathname === '/') ? "account__circle account__circle_blue": "account__circle"}>
                    <img className="account__icon" src={profile} alt="Профиль" />
                </div>
            </div>
        </Link>
    )
}