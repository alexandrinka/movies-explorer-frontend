import { useState, useEffect } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { filterMovies } from '../../utils/AdditionalFunc';

export default function SavedMovies({ onPopupOpen, loggedIn, listLikedMovies, onDislikeMovie }) {
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [isShortMovie, setIsShortMovie] = useState(false);
    const [isqueryMovies, setIsQueryMovies] = useState('');
    const [isEmpty, setIsEmpty] = useState(false);

    function handleSubmit(value) {
        setIsQueryMovies(value);
        const resultList = filterMovies(listLikedMovies, isqueryMovies, isShortMovie);
        setFilteredMovies(resultList);
    };

    function handleCheckbox(e) {
        setIsShortMovie(e.target.value);
    };

    useEffect(() => {
        const arr = filterMovies(listLikedMovies, isqueryMovies, isShortMovie);
        setFilteredMovies(arr);
        if (isqueryMovies) {
            arr.length === 0 ? setIsEmpty(true) : setIsEmpty(false);
        }
    }, [isqueryMovies, isShortMovie, listLikedMovies]);
    return (
        <>
            <Header onPopupOpen={onPopupOpen} loggedIn={loggedIn} />
            <main className='main'>
                <SearchForm
                    onSubmit={handleSubmit}
                    onCheckbox={handleCheckbox}
                    isShortMovie={isShortMovie}
                    savedMoviesPage={true} />

                <MoviesCardList
                    listMovies={filteredMovies}
                    savedMoviesPage={true}
                    onDislikeMovie={onDislikeMovie}
                    isEmpty={isEmpty}
                />
                <div className='savedmovies__devider'></div>
            </main>
            <Footer />
        </>
    )
}