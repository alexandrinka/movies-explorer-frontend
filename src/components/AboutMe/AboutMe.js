import React from 'react';
import myPhoto from '../../images/myPhoto.jpg';
import { Link } from 'react-router-dom';

export default function AboutMe() {
    return (
        <section className="aboutMe" id="aboutMe">
            <h2 className='aboutMe__title'>Студент</h2>
            <div className='aboutMe__col'>
                <div className='aboutMe__colLeft'>
                    <div className='aboutMe__info'>
                        <h3 className='aboutMe__name'>Александра</h3>
                        <p className='aboutMe__subtitle'>Фронтенд-разработчик, 23 года</p>
                        <p className='aboutMe__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ. 
                        У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
                        С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
                        начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    </div>
                    <Link to='https://github.com/alexandrinka' className='aboutMe__link'>Github</Link>
                </div>
                <div className='aboutMe__colRight'>
                    <img className="aboutMe__photo" src={myPhoto} alt="Логотип" />
                </div>
            </div>
        </section>
    );
}
