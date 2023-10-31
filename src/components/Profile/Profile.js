import React from 'react'
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

export default function Profile() {
    return (
        <>
            <Header />
            <div className='profile'>
                <h1 className='profile__title'>Привет, Александра!</h1>
                <div className='profile__info'>
                    <p className='profile__designation'>Имя</p>
                    <p className='profile__data'>Александра</p>
                </div>
                <div className='profile__info'>
                    <p className='profile__designation'>E-mail</p>
                    <p className='profile__data'>alexandravslv@gmail.com</p>
                </div>
                <Link className='profile__edit'>Редактировать</Link>
                <Link to="/signin" className='profile__exit'>Выйти из аккаунта</Link>
            </div>
        </>
    )
}