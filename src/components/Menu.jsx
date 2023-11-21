import React from "react";
import ReactDOM from 'react-dom';
import style from '../css/Menu.module.css'
import { Link } from "react-router-dom";

const Menu = ()=>{
    return(
        <nav className={style.nav}>
            <Link className={style.a} to='/my_page'>My Page</Link>
            <Link className={style.a} to='/posts'>Posts</Link>
            <Link className={style.a} to='/friends'>Friends</Link>
            <Link className={style.a} to='/messages'>Messages</Link>
        </nav>
    )
}

export default Menu;

