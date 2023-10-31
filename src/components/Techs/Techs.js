import React from 'react'

export default function Techs() {
    return (
        <div className="techs" id="techs">
            <h2 className='techs__title'>Технологии</h2>
            <h3 className='techs__subtitle'>7 технологий</h3>
            <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className='techs__list'>
                <li className='techs__item techs__item_right'>HTML</li>
                <li className='techs__item'>CSS</li>
                <li className='techs__item techs__item_right'>JS</li>
                <li className='techs__item'>React</li>
                <li className='techs__item techs__item_right'>Git</li>
                <li className='techs__item'>Exliress.js</li>
                <li className='techs__item techs__item_right'>mongoDB</li>
            </ul>
        </div>
    );
}
