import React from "react";
import img0 from '../images/user.jpg'
import style from '../css/Home.module.css'
import { Link } from "react-router-dom";


const Home = (props)=>{

    return(
        <section className={style.home}>
            <div className={style.div_img0}>
                <img src={img0} alt="aystex karox e linel dzer govazdy" className={style.img0}/>
            </div>
            <div className={style.div_tvyalner}>
                <p className={style.tvyalner}>U-name: {props.user.uname}</p>
                <p className={style.tvyalner}>F-name: {props.user.name}</p>
                <p className={style.tvyalner}>L-name: {props.user.Lname}</p>
                <p className={style.tvyalner}>E-mail: {props.user.gmail}</p>
                <p className={style.tvyalner}>P-Number: {props.user.pnumber}</p>
                <Link to='/changeInfo' className={style.changeInfo}>Add or Change Info</Link>
            </div>
        </section>
    )
}

export default Home;