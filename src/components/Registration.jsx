import React, { useState } from "react";
import style from '../css/Registration.module.css'
import img from '../images/RafRob.jpg'
import { Link, useNavigate } from "react-router-dom";



let Registration = () =>{
    let [user,setUser] = useState({id:new Date().getTime() ,uname:"",password:"",pnumber:'',gmail:'',name:'',Lname:''})
    let navigate = useNavigate()
    let [unameSxal,setUnameSxal] = useState('')
    let p = JSON.parse(localStorage.getItem('users'))
    console.log(new Date().getTime())
    function check(){
        
        if(user.uname == '' || user.password == '' || user.pnumber == '' || user.gmail == ''){
            alert("lracreq bolor dshtery")
        }else{
              if( localStorage.getItem('users')) {

                let w = JSON.parse(localStorage.getItem('users'))
                w.push(user)
                localStorage.setItem('users',JSON.stringify(w))
                setUser({id:new Date().getTime(),uname:"",password:"",pnumber:'',gmail:'',name:'',Lname:''})

              } else{
                localStorage.setItem('users',JSON.stringify([{...user}]))
                setUser({id:new Date().getTime(),uname:"",password:"",pnumber:'',gmail:'',name:'',Lname:''})
            }       
            navigate('/LogIn')


        }
    }


    return(
        <div className={style.Registration0}>
             <div className={style.Registration1} >
           
            <label>
            <b>User Name:</b><input className={style.input} type={'text'} value={user['uname']} onChange={(e)=>{
                    setUser({...user,"uname":e.currentTarget.value})
                    console.log(p.some(v =>v.uname == user['uname']),user,p)
                    if(!p.some(v =>v.uname == user['uname'])){
                        setUnameSxal('AZAT E')
                    }else{
                        setUnameSxal('ayspisi userName ka ')
                    }
            }}/>
            </label>
            <p>{unameSxal}</p>
            <label>               
                <b>Password:</b><input className={style.input} type={'text'} value={user['password']} onChange={(e)=>{setUser({...user,"password":e.currentTarget.value})}}></input>
            </label>
            <label>
                <b>Phone Number:</b><input className={style.input} type={'number'} value={user['pnumber']} onChange={(e)=>{setUser({...user,"pnumber":e.currentTarget.value})}}></input>
            </label>
            <label>
                <b>Gmail:</b><input className={style.input} type={'text'} value={user['gmail']} onChange={(e)=>{setUser({...user,"gmail":e.currentTarget.value})}}></input>
            </label>
            <button className={style.button0} onClick={()=>{
                check()
            }}>Confirm</button>
            </div>
            <div className={style.Registration2}>
                <p className={style.p0}><b>arden uneq ej?</b></p>
                <Link className={style.button1} to='/LogIn'>Log In</Link>
            </div>
        </div>
    )
}

export default Registration;

