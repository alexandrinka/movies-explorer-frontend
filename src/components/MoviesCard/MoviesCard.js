import React from 'react';
import picOne from '../../images/picOne.png';
import picTwo from '../../images/picTwo.png';
import picThree from '../../images/picThree.png';

export default function MoviesCard({ typeCard }) {
    return (
        <>
            <li className="elements__list-item">
                <div className="elements__container_img">
                    <img className="elements__img" src={picOne} alt='Картинка один' />
                </div>
                <div className="elements__description">
                    <p className="elements__name">33 слова о дизайне</p>
                    <button type="button" className={typeCard === "allMovies" ? "elements__btn elements__like" : "elements__btn elements__cross"}></button>
                </div>
                <p className="elements__hour">1ч 47м</p>
            </li>

            <li className="elements__list-item">
                <div className="elements__container_img">
                    <img className="elements__img" src={picTwo} alt='Картинка один' />
                </div>
                <div className="elements__description">
                    <p className="elements__name">Киноальманах «100 лет дизайна»</p>
                    <button type="button" className={typeCard === "allMovies" ? "elements__btn elements__like" : "elements__btn elements__cross"}></button>
                </div>
                <p className="elements__hour">1ч 3м</p>
            </li>

            <li className="elements__list-item">
                <div className="elements__container_img">
                    <img className="elements__img" src={picThree} alt='Картинка один' />
                </div>
                <div className="elements__description">
                    <p className="elements__name">В погоне за Бенкси</p>
                    <button type="button" className={typeCard === "allMovies" ? "elements__btn elements__like" : "elements__btn elements__cross"}></button>
                </div>
                <p className="elements__hour">1ч 42м</p>
            </li>
            <li className="elements__list-item">
                <div className="elements__container_img">
                    <img className="elements__img" src={picThree} alt='Картинка один' />
                </div>
                <div className="elements__description">
                    <p className="elements__name">В погоне за Бенкси</p>
                    <button type="button" className={typeCard === "allMovies" ? "elements__btn elements__like" : "elements__btn elements__cross"}></button>
                </div>
                <p className="elements__hour">1ч 42м</p>
            </li>
            <li className="elements__list-item">
                <div className="elements__container_img">
                    <img className="elements__img" src={picThree} alt='Картинка один' />
                </div>
                <div className="elements__description">
                    <p className="elements__name">В погоне за Бенкси</p>
                    <button type="button" className={typeCard === "allMovies" ? "elements__btn elements__like" : "elements__btn elements__cross"}></button>
                </div>
                <p className="elements__hour">1ч 42м</p>
            </li>
        </>
    )
}