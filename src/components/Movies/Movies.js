import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from '../More/More';
import SearchForm from '../SearchForm/SearchForm';

export default function Movies({ onPopupOpen }) {
    return (
        <>
            <Header onPopupOpen={onPopupOpen}/>
            <main className='main'>
                <SearchForm />
                <MoviesCardList typeCard="allMovies" />
                <More />
            </main>
            <Footer />
        </>
    )
}