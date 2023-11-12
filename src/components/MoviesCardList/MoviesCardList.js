import { React, useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';


export default function MoviesCardList({ listMovies, listLikedMovies, isPreloader, isError, isEmpty, onLikeMovie, onDislikeMovie, savedMoviesPage }) {
    const [windoWidth, setWidth] = useState(window.innerWidth);
    const [resultMovies, setResultMovies] = useState([]);
    const [cardsShowParams, setCardsShowParams] = useState({ count: 0, more: 0 });
    const [isBtnMore, setIsBtnMore] = useState(false);

    function showMoreMovies() {
        const start = resultMovies.length;
        const end = start + cardsShowParams.more;
        const residual = listMovies.length - start;

        if (residual > 0) {
            const newCards = listMovies.slice(start, end);
            setResultMovies([...resultMovies, ...newCards]);
        }
    }

    useEffect(() => {
        if (windoWidth > 768) {
            setCardsShowParams({ count: 12, more: 3 });
        } else if (windoWidth <= 768 && windoWidth > 480) {
            setCardsShowParams({ count: 8, more: 2 });
        } else if (windoWidth <= 480 && windoWidth >= 320) {
            setCardsShowParams({ count: 5, more: 2 });
        }
    }, [windoWidth]);

    useEffect(() => {
        const handleResize = (event) => {
            setWidth(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        let res = listMovies.slice(0, cardsShowParams.count);
        setResultMovies(res);
        setIsBtnMore(true);
    }, [listMovies, cardsShowParams]);

    function getSavedMovieCard(arr, id) {
        return arr.find((item) => {
            return item.movieId === id;
        });
    };

    // ф-ия создания массива избранных карточек
    function getSavedMoviesPage() {
        return listMovies.map((item) => (
            <MoviesCard
                key={item._id}
                card={item}
                savedPage={savedMoviesPage}
                onDislikeMovie={onDislikeMovie}
            />
        ))
    };

    // ф-ия создания массива стандартных карточек
    function getInitialMoviesPage() {
        return resultMovies.map((item) => {
            const likedMovieCard = getSavedMovieCard(listLikedMovies, item.id);
            const likedMovieId = likedMovieCard ? likedMovieCard._id : null;
            return (
                <MoviesCard
                    key={item.id}
                    card={{ ...item, _id: likedMovieId }}
                    onLikeMovie={onLikeMovie}
                    onDislikeMovie={onDislikeMovie}
                    isLiked={likedMovieCard ? true : false}
                />)
        })
    };

    return (
        <section className={true ? "elements" : "elements elements_margin"}>
            {isPreloader ? (
                <Preloader />
            ) : (
                isEmpty || isError ? (
                    <p className='elements__message'>
                        {isError ? `Во время запроса произошла ошибка. 
                    Возможно, проблема с соединением или сервер недоступен.
                    Подождите немного и попробуйте ещё раз.` : 'Ничего не найдено'}
                    </p>
                ) : (
                    <>
                        <ul className="elements__list">
                            {savedMoviesPage ? getSavedMoviesPage() : getInitialMoviesPage()}
                        </ul>
                        <button className={isBtnMore && (listMovies.length !== resultMovies.length) ? "elements__more" : "elements__more elements__more_hidden"} type="button" onClick={showMoreMovies}>Ещё</button>
                    </>
                )
            )}
        </section>
    )
}