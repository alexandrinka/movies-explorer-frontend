import React from 'react'

export default function AboutProject() {
    return (
        <div className="aboutProject" id="aboutProject">
            <h2 className='aboutProject__title'>О проекте</h2>
            <div className='aboutProject__plan'>
                <h3 className='aboutProject__subtitle aboutProject__subtitle__lefttUp'>Дипломный проект включал 5 этапов</h3>
                <p className='aboutProject__plan-text aboutProject__plan-text_leftDown'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <h3 className='aboutProject__subtitle aboutProject__subtitle_rightUp'>На выполнение диплома ушло 5 недель</h3>
                <p className='aboutProject__plan-text aboutProject__plan-text_rightDown'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className='aboutProject__plan-time'>
                <p className='aboutProject__time-text aboutProject__time-text_green'>1 неделя</p>
                <p className='aboutProject__time-text aboutProject__time-text_gray'>4 недели</p>
                <p className='aboutProject__text-gray'>Back-end</p>
                <p className='aboutProject__text-gray'>Front-end</p>
            </div>
        </div>
    );
}