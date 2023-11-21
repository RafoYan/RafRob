import React from "react";
import Posts from './Posts';
import Friends from './Friends';
import Messages from './Messages';
import { Route, Routes} from "react-router-dom"
import Error from './Error';
import Addpost from './Addpost'
import Footer from './Footer';
import Header from './Header';
import Home from './Home';

let Page = (props)=>{
    console.log(props,'page')
    return(
        <div>
            <Header/>
            <Routes>
                {/* <Route path='/*' element={<Error/>}/> */}
                <Route path='/*' element={<Home user = {props.user} />}/>
                <Route path='/posts' element={<Posts/>}/>
                <Route path='/posts/addpost' element={<Addpost/>}/>
                <Route path='/friends' element={<Friends/>}/>
                <Route path='/messages' element={<Messages/>}/>

            </Routes>
            <Footer/>
        </div>
    )
}

export default Page;