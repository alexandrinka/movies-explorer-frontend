import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
    const navigate = useNavigate();
    const goBack = () => navigate(-1)
    return (
        <div className="not-found-page">
            <h1 className='not-found-page__title'>404</h1>
            <p className='not-found-page__text'>Страница не найдена</p>
            <Link className='not-found-page__link' onClick={goBack}>Назад</Link>
        </div>
    );
}
