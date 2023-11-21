import React from "react";
import image from '../images/error.png'
import style from '../css/Error.module.css'

const Error = ()=>{
    return(
        <div className={style.Error}>
                <img src={image} className={style.ErrorImg}/>
        </div>
    )
}

export default Error;