import { Link } from 'react-router-dom';

export default function MoviesCard({ card, onLikeMovie, onDislikeMovie, savedPage, isLiked }) {

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

    const cardLikeButtonClassName = (
        isLiked ? "elements__btn elements__like elements__like_active" : "elements__btn elements__like"
    );

    function handleLikeClick() {
        onLikeMovie(card);
    }

    function handleDislikeMovie() {
        onDislikeMovie(card);
    }

    return (
        <li className="elements__list-item" key={card.nameRU}>
            <Link className="elements__container-img" to={card.trailerLink} target='_blank'>
                <img className="elements__img" src={!savedPage ? `https://api.nomoreparties.co${card.image.url}` : `${card.image}`} alt={`${card.nameRU}`} />
            </Link>
            <div className="elements__description">
                <p className="elements__name">{card.nameRU}</p>
                <button
                    type="button"
                    className={!savedPage ? cardLikeButtonClassName : "elements__btn elements__cross"}
                    onClick={savedPage || isLiked ? handleDislikeMovie : handleLikeClick}>
                </button>
            </div>
            <p className="elements__hour">{setIsHourFilm(card.duration)}</p>
        </li>
    )
}