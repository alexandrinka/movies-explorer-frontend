import React from 'react'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchForm() {
    return (
        <>
            <form className="search">
                <input className="search__input" placeholder='Фильм'></input>
                <button className="search__btn" type="submit"></button>
                <FilterCheckbox />
            </form>
        </>
    )
}