import { React, useState, useEffect } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { moviesApi } from "../../utils/MoviesApi";
import { filterMovies, filterShortMovies } from '../../utils/AdditionalFunc';

export default function Movies({ onPopupOpen }) {
    const forCheckbox = localStorage.getItem('shortMovies') === 'true' ? 'true' : 'false';

    const [filteredMovies, setFilteredMovies] = useState([]);
    const [isShortMovie, setIsShortMovie] = useState(false);
    const [allMovies, setAllMovies] = useState([]);
    const [isPreloader, setIsPreloader] = useState(false);
    const [isqueryMovies, setIsQueryMovies] = useState('');
    const [isError, setIsError] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);

    function handleSetFilteredMovies(movies, query) {
        let moviesList = filterMovies(movies, query, isShortMovie);
        console.log(isShortMovie);
        if(isShortMovie){
            console.log('short');
            moviesList = filterShortMovies(moviesList);
        }
        setFilteredMovies(moviesList);
        localStorage.setItem('allmovies', JSON.stringify(moviesList));
    }

    function handleSubmit(value) {
        localStorage.setItem('shortMovies', isShortMovie);
        localStorage.setItem('queryMovies', value);
        setIsQueryMovies(value);
        if (allMovies.length) {
            handleSetFilteredMovies(allMovies, value);
        } else {
            setIsPreloader(true);
            moviesApi.getMovies()
                .then((data) => {
                    setAllMovies(data);
                    handleSetFilteredMovies(data, value);
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

    // проверяем есть ли данные в хранилище
    useEffect(() => {
        const arr = JSON.parse(localStorage.getItem('allmovies'));
        if (arr && !isqueryMovies) {
            setIsShortMovie(localStorage.getItem('shortMovies'));
            console.log(isShortMovie);
            setFilteredMovies(isShortMovie ? filterShortMovies(arr) : arr);
            handleCheckForEmptiness(arr);
        }
    }, [isqueryMovies, isShortMovie])

    // по новому запросу фильтруем фильмы
    useEffect(() => {
        if (isqueryMovies) {
            const arr = filterMovies(allMovies, isqueryMovies, isShortMovie);
            setFilteredMovies(arr);
            handleCheckForEmptiness(arr);
        }
    }, [isqueryMovies, allMovies, isShortMovie])

    return (
        <>
            <Header onPopupOpen={onPopupOpen} />
            <main className='main'>
                <SearchForm onSubmit={handleSubmit} onCheckbox={handleCheckbox} isShortMovie={isShortMovie} />
                <MoviesCardList isPreloader={isPreloader} listMovies={filteredMovies} isError={isError} isEmpty={isEmpty} typeCard="allMovies" />
            </main>
            <Footer />
        </>
    )
}