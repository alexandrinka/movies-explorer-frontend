import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

export default function SavedMovies() {
    return (
        <>
            <Header />
            <SearchForm />
            <MoviesCardList typeCard = "savedMovies"/>
            <div className='savedmovies__devider'></div>
            <Footer />
        </>
    )
}