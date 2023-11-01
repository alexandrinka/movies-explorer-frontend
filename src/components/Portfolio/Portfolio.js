import React from 'react';
import { Link } from 'react-router-dom';

export default function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className='portfolio__title'>Портфолио</h2>
            <Link to='https://alexandrinka.github.io/russian-travel/' target='_blank' className='portfolio__link'>
                <p className='portfolio__site'>Статичный сайт</p>
                <p className='portfolio__arrow'>↗</p>
            </Link>
            <Link to='https://alexandrinka.github.io/mesto/' target='_blank' className='portfolio__link'>
                <p className='portfolio__site'>Адаптивный сайт</p>
                <p className='portfolio__arrow'>↗</p>
            </Link>
            <Link to='https://alexa.nomoredomainsrocks.ru/' target='_blank' className='portfolio__link'>
                <p className='portfolio__site'>Одностраничное приложение</p>
                <p className='portfolio__arrow'>↗</p>
            </Link>
        </section>
    );
}
