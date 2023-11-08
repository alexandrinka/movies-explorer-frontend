import React from 'react';
import { Link } from 'react-router-dom';

export default function MoviesCard({ typeCard, card }) {

    function setIsHourFilm(time) {
        if (time % 60 === 0) {
            return (Math.trunc(time / 60) + "ч ");
        }
        else if (time > 60) {
            return (Math.trunc(time / 60) + "ч " + time % 60 + "м");
        }
        else {
            return time % 60 + "м";
        }
    };

    return (
        <li className="elements__list-item" key={card.nameRU}>
            <Link className="elements__container-img" to={card.trailerLink} target='_blank'>
                <img className="elements__img" src={`https://api.nomoreparties.co${card.image.url}`} alt={`${card.nameRU}`} />
            </Link>
            <div className="elements__description">
                <p className="elements__name">{card.nameRU}</p>
                <button type="button" className={typeCard === "allMovies" ? "elements__btn elements__like" : "elements__btn elements__cross"}></button>
            </div>
            <p className="elements__hour">{setIsHourFilm(card.duration)}</p>
        </li>
    )
}