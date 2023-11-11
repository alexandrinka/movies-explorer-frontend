import { React, useState, useEffect } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { moviesApi } from "../../utils/MoviesApi";
import { filterMovies, filterShortMovies } from '../../utils/AdditionalFunc';

export default function Movies({ onPopupOpen, loggedIn, onLikeMovie, onDislikeMovie, listLikedMovies }) {

    const getAllMovies = JSON.parse(localStorage.getItem('allmovies')) ? JSON.parse(localStorage.getItem('allmovies')) : [];
    const getQueryMovies = localStorage.getItem('queryMovies') ? localStorage.getItem('queryMovies') : '';
    const getShortMovie = localStorage.getItem('shortMovies') ? (localStorage.getItem('shortMovies') === "true" ? true : false) : false;

    const [filteredMovies, setFilteredMovies] = useState([]);
    const [isShortMovie, setIsShortMovie] = useState(getShortMovie);
    const [allMovies, setAllMovies] = useState(getAllMovies);
    const [isPreloader, setIsPreloader] = useState(false);
    const [isqueryMovies, setIsQueryMovies] = useState(getQueryMovies);
    const [isError, setIsError] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);

    function handleSetFilteredMovies(movies, query, isShortMovie) {
        let moviesList = filterMovies(movies, query, isShortMovie);
        if (isShortMovie) {
            moviesList = filterShortMovies(moviesList);
        }
        setFilteredMovies(moviesList);
        localStorage.setItem('moviesOnDemand', JSON.stringify(moviesList));
    }

    function handleSubmit(value) {
        localStorage.setItem('shortMovies', isShortMovie);
        localStorage.setItem('queryMovies', value);
        setIsQueryMovies(value);
        setIsPreloader(true);
        if (allMovies.length) {
            handleSetFilteredMovies(allMovies, value, isShortMovie);
            setIsPreloader(false);
        } else {
            moviesApi.getMovies()
                .then((data) => {
                    setAllMovies(data);
                    handleSetFilteredMovies(data, value, isShortMovie);
                    localStorage.setItem('allmovies', JSON.stringify(data));
                })
                .catch((err) => {
                    setIsError(true);
                })
                .finally(() => setIsPreloader(false))
        }
    }

    function handleCheckForEmptiness(arr) {
        arr.length === 0 ? setIsEmpty(true) : setIsEmpty(false);
    }

    function handleCheckbox(e) {
        setIsShortMovie(e.target.checked);
        localStorage.setItem('shortMovies', e.target.checked);
    }

    useEffect(() => {
        const arr = JSON.parse(localStorage.getItem('moviesOnDemand'));
        if (arr && !isqueryMovies) {
            setIsShortMovie(localStorage.getItem('shortMovies') === "true" ? true : false);
            setFilteredMovies(isShortMovie ? filterShortMovies(arr) : arr);
            handleCheckForEmptiness(arr);
        }
    }, [isqueryMovies, isShortMovie])

    useEffect(() => {
        if (isqueryMovies) {
            const arr = filterMovies(allMovies, isqueryMovies, isShortMovie);
            setFilteredMovies(arr);
            handleCheckForEmptiness(arr);
        }
    }, [isqueryMovies, allMovies, isShortMovie])

    return (
        <>
            <Header onPopupOpen={onPopupOpen} loggedIn={loggedIn} />
            <main className='main'>
                <SearchForm
                    onSubmit={handleSubmit}
                    onCheckbox={handleCheckbox}
                    isShortMovie={isShortMovie} />

                <MoviesCardList
                    isPreloader={isPreloader}
                    listMovies={filteredMovies}
                    listLikedMovies={listLikedMovies}
                    isError={isError}
                    isEmpty={isEmpty}
                    onLikeMovie={onLikeMovie}
                    onDislikeMovie={onDislikeMovie}
                />
            </main>
            <Footer />
        </>
    )
}