import React from 'react';
import { Link } from 'react-router-dom';

export default function Portfolio() {
    return (
        <div className="portfolio">
            <h2 className='portfolio__title'>Портфолио</h2>
            <div className='portfolio__link'>
                <p className='portfolio__site'>Статичный сайт</p>
                <Link to='https://alexandrinka.github.io/russian-travel/' target='_blank' className='portfolio__arrow'>↗</Link>
            </div>
            <div className='portfolio__link'>
                <p className='portfolio__site'>Адаптивный сайт</p>
                <Link to='https://alexandrinka.github.io/mesto/' target='_blank' className='portfolio__arrow'>↗</Link>
            </div>
            <div className='portfolio__link'>
                <p className='portfolio__site'>Одностраничное приложение</p>
                <Link to='https://alexa.nomoredomainsrocks.ru/' target='_blank' className='portfolio__arrow'>↗</Link>
            </div>
        </div>
    );
}
