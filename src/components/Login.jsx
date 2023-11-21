import React, { useEffect, useState } from "react";
import style from '../css/Login.module.css'
import { Link } from "react-router-dom";

let Login = (props)=>{
    let [error,SetError]=useState('')
    let x = JSON.parse(localStorage.getItem('users'))
    let [uname,setUname] = useState('')
    let [changeCom,setChangeCom] = useState(()=>JSON.parse(localStorage.getItem("user")))
    let [Password,setPassword] = useState('')
    
    
    function confirm(  ){
        console.log(uname, Password)
        if(uname == '' || Password == ''){
            uname = ''
            Password = ''
            alert('xndrum enq lracnel bolor dashtery')
        }else{
            console.log(x)
            let k = x.find(v => v.uname == uname && v.password == Password) 
            if(!k){
                SetError('password or login is not currectly')
                props.f("")    
            }else{
                localStorage.setItem("user",JSON.stringify(k)) 
                props.f(k)    
            }
        }
    }


    if(!changeCom){
        return(
            <div className={style.LogIn}>
                <div className={style.Log_div}>
                    <label>
                        <input placeholder="Username" value={uname} onChange={(e) =>setUname(e.currentTarget.value)} className={style.Log_input_Uname}></input>
    
                    </label>
                    <label>
                        <input placeholder="Password" value={Password} onChange={(e) =>setPassword(e.currentTarget.value)} className={style.Log_input_Pass}></input>
                    </label> 
                    <p><b>{error}</b></p>
                    <button 
                            
                        onClick={()=>confirm()}
    
    
                        className={style.Log_input_Confirm}>
                            confirm
                    </button>   
                </div>
                <div className={style.Login2}>
                    <p className={style.p0}><b>Der ej chuneq?</b></p>
                    <Link className={style.button1} to='/'>Registration</Link>
                </div>
            </div>
        )
    }else{
        props.f()
    }
}

export default Login;