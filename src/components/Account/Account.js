import profile from '../../images/profile.svg';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Account({ onPopupClose, popupNavigation }) {
    const currentUrl = useLocation();
    return (
        <Link to='/profile' className='account'>
            <div className={(currentUrl.pathname === '/') && !popupNavigation ? "account__content account__content_blue" : "account__content"} onClick={onPopupClose}>
                <p className='account__text'>Аккаунт</p>
                <div className={(currentUrl.pathname === '/') && !popupNavigation ? "account__circle account__circle_blue" : "account__circle"}>
                    <img className="account__icon" src={profile} alt="Профиль" />
                </div>
            </div>
        </Link>
    )
}