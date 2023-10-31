import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__box'>
                <p className='footer__year'>© 2023</p>
                <div className='footer__link'>
                    <Link to='https://practicum.yandex.ru/' target="_block" className='footer__link-item'>Яндекс.Практикум</Link>
                    <Link to='https://github.com/alexandrinka' target="_block" className='footer__link-item'>Github</Link>
                </div>
            </div>
        </footer>
    )
}