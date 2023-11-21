import React from "react";
import style from '../css/Addpost.module.css'

const Addpost = ()=>{
    return (
        <div className={style.container}>
            <label>
                post title: <input placeholder="title"/>
            </label>
            <label>
            post body: <input placeholder="body"/>
            </label>
        </div>
    )
}

export default Addpost;