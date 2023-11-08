import React from 'react'

export default function FilterCheckbox({ onCheckbox, isShortMovie }) {
    return (
        <div className='check'>
            <label className="check__label" htmlFor="shortFilm">
                <input className="check__iunput"
                    type="checkbox" id="shortFilm"
                    name="shortFilm"
                    onChange={onCheckbox}/>
                <span className='check__box'></span>
                Короткометражки
            </label>
        </div>
    )
}