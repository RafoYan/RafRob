import React, { useEffect, useState } from "react";
import style from '../css/changeInfo.module.css'


const ChangeInfo = (props)=>{
    let [changeUser,setChangeUser] = useState(JSON.parse(localStorage.getItem('user')))
    // let [Uname,setUname] = useState(m.uname)
    // let [Name,setName] = useState(m.name)
    // let [Lastname,setLname] = useState(m.Lname)
    // let [Email,setEmail] = useState(m.gmail)
    // let [Pnumber,setPnumber] = useState(m.pnumber)
    // let [Password,setPassword] = useState(m.password)
    let [avart,setAvart] = useState('')
    return (
        <div className={style.ChangeInfo_0}>
            <div className={style.ChangeInfo_1}>
                <p><b>User-Name:</b></p>
                <input type='text' placeholder='User Name' value={changeUser.uname} onChange={e=>setChangeUser({...changeUser,uname: e.currentTarget.value})} className={style.input}/>
                <p><b>Name:</b></p>
                <input type='text' placeholder='Name'  value={changeUser.name} onChange={e=>setChangeUser({...changeUser,name: e.currentTarget.value})} className={style.input}/>
                <p><b>Last Name:</b></p>
                <input type='text' placeholder='Last Name'  value={changeUser.Lname} onChange={e=>setChangeUser({...changeUser,lname: e.currentTarget.value})} className={style.input}/>
                <p><b>E-mail:</b></p>
                <input type='email' placeholder='E-mail'  value={changeUser.gmail} onChange={e=>setChangeUser({...changeUser,gmail: e.currentTarget.value})} className={style.input}/>
                <p><b>Phone Number:</b></p>
                <input type='number' placeholder='Phone Number'  value={changeUser.pnumber} onChange={e=>setChangeUser({...changeUser,pnumber: e.currentTarget.value})} className={style.input}/>
                <p><b>Password:</b></p>
                <input type='password' placeholder='Password'  value={changeUser.password} onChange={e=>setChangeUser({...changeUser,password: e.currentTarget.value})} className={style.input}/>
                
                <p><b>{avart}</b></p>

                <p className={style.button} onClick={()=>{
                   let usersIndex =  JSON.parse(localStorage.getItem('users')).findIndex(v =>v.password == changeUser.password & v.uname == changeUser.uname)
                   localStorage.setItem("user",JSON.stringify({"uname":changeUser.uname,"password":changeUser.password,"pnumber":changeUser.pnumber,"gmail":changeUser.gmail,"name":changeUser.name,"Lname":changeUser.Lname}))
                   let k = JSON.parse( localStorage.getItem('users'))
                   k[usersIndex] =  {"uname":changeUser.uname,"password":changeUser.password,"pnumber":changeUser.pnumber,"gmail":changeUser.gmail,"name":changeUser.name,"Lname":changeUser.Lname}
                    localStorage.setItem('users', JSON.stringify(k))
                    props.k({"uname":changeUser.uname,"password":changeUser.password,"pnumber":changeUser.pnumber,"gmail":changeUser.pmail,"name":changeUser.name,"Lname":changeUser.Lname})

                    setAvart('hajoghutyamb poxeciq dzer tvyalnery')
                    setTimeout(() => {
                        setAvart('')
                    }, 3000);
                }}>Change Info</p>
            </div>
            
        </div>
    )
}

export default ChangeInfo;