import React from 'react'

export default function FilterCheckbox() {
    return (
        <div className='check'>
            <label className="check__label" for="shortFilm">
                <input className="check__iunput" type="checkbox" id="shortFilm" name="shortFilm" />
                <span className='check__box'></span>
                Короткометражки
            </label>
        </div>
    )
}