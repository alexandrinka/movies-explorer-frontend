import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from '../More/More';
import SearchForm from '../SearchForm/SearchForm';

export default function Movies() {
    return (
        <>
            <Header />
            <SearchForm />
            <MoviesCardList typeCard="allMovies" />
            <More />
            <Footer />
        </>
    )
}