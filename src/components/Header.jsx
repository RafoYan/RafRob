import React from 'react';
import Menu from './Menu';
import style from '../css/Header.module.css'
import { Link } from 'react-router-dom';


const Header = (props)=>{
    return(
        <header className={style.header}>
            <Link to='/my_page' className={style.h1}><b>RafRob</b> </Link>
            <Menu/>
        </header>
        
    )
}

export default Header;