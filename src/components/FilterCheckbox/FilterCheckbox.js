import React from 'react'

export default function FilterCheckbox({ onCheckbox, isShortMovie }) {
    return (
        <div className='check'>
            <label className="check__label" htmlFor="shortFilm">
                <input className="check__input"
                    type="checkbox"
                    id="shortFilm"
                    name="shortFilm"
                    checked={isShortMovie ? true : false}
                    onChange={onCheckbox} />
                <span className={isShortMovie ? 'check__box check__box_active' : 'check__box'}></span>
                Короткометражки
            </label>
        </div>
    )
}