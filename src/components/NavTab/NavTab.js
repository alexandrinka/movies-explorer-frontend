import React from 'react'
import { Link } from "react-scroll";

export default function NavTab() {
    return (
        <nav class="navTab  ">
            <ul className='navTab__list'>
                <li class="navTab__item"><Link to='aboutProject' smooth={true} duration={500} className='navTab__link'>О проекте</Link></li>
                <li class="navTab__item"><Link to='techs' smooth={true} duration={500} className='navTab__link'>Технологии</Link></li>
                <li class="navTab__item"><Link to='aboutMe' smooth={true} duration={500} className='navTab__link'>Студент</Link></li>
            </ul>
        </nav>
    );
}
