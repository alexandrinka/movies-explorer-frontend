import React from 'react'
import mainImg from '../../images/main_img.svg';

export default function Main() {
    return (
        <div className='promo'>
            <img className="promo__img" src={mainImg} alt="Профиль" />
            <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        </div>
    );
}