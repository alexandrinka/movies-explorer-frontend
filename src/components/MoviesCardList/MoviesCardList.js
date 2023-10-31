import React from 'react'
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({ typeCard }) {
    return (
        <section className={typeCard === "allMovies" ? "elements" : "elements elements_margin"}>
            <ul className="elements__list">
                <MoviesCard typeCard={typeCard} />
            </ul>
        </section>
    )
}