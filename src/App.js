import React, { useState } from 'react';
import style from './css/App.module.css'
import style0 from './css/LogOut.module.css'
import { Route, Routes} from "react-router-dom"
import Login from './components/Login';
import Registration from './components/Registration';
import Posts from './components/Posts';
import Addpost from './components/Addpost';
import Friends from './components/Friends';
import Messages from './components/Messages';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ChangeInfo from './components/ChangeInfo';



const App = ()=> {
  let [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

    if(user){
    return(
      <div className={style.App}>
        <div className={style0.LogOut}
                    onClick={()=>{
                      let k =  window.confirm('ardyoq uzum eq durs gal')
                          if(k){
                            let m = window.confirm('harur tokos uzum es dus gas?')
                            if(m){
                              localStorage.removeItem("user")
                               setUser(false)                              
                            }
                          }
                      }}
        >
          Log Out
        </div>
          <Header r={setUser}/>
          <Routes>
              {/* <Route path='/*' element={<Error/>}/> */}
              <Route path='/*' element={<Home user = {user} />}/>
              <Route path='/posts' element={<Posts/>}/>
              <Route path='/posts' element={<Addpost/>}/>
              <Route path='/friends' element={<Friends/>}/>
              <Route path='/messages' element={<Messages/>}/>
              <Route path='/changeInfo' element={<ChangeInfo k={setUser}/>}/>
          </Routes>
          <Footer/>
      </div>
  )
  }else{
    console.log("else")
    return (
      <div className={style.app}>
        <Routes>
          <Route path='/LogIn' element={<Login f={setUser}/>}/>
          <Route path='/*' element={<Registration/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;
