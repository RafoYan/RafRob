import React, { useEffect, useState } from "react";
import style from '../css/Posts.module.css'

const Posts = ()=>{
    let [postState,setPostState] = useState({post:{title:"",body:""},error:''})

    let p = JSON.parse(localStorage.getItem('user'))
    // let [title,setTitle] = useState("")
    // let [body,setBody] = useState("")
    let [post,setPost] = useState([])
    let [x,setX] = useState(0)
    let [errorrr, setError] = useState('')
    function f(){
        return post.length?post[post.length-1].id+1:0
    }
    useEffect(()=>{
        setPost(JSON.parse(localStorage.getItem('post')))
    },[])

    useEffect(()=>{
        localStorage.setItem('post',JSON.stringify(post))
        setX(f())
    },[post])
    return(
        <div className={style.PostDiv}>
            <div>
                <label>
                post title: <input placeholder="title" value={postState.post.title} onChange={(e)=>setPostState({...postState,post:{...post,title:e.currentTarget.value}})}/>
                </label>
                <label>
                    post body: <input placeholder="body" value={postState.post.body} onChange={(e)=>setPostState({...postState,body:{...post,body:e.currentTarget.value}})}/>
                </label>
                <button 
                onClick={()=>{
                    if(postState.post.title == "" || postState.post.body == ""){
                        setError("lracreq bolor dashtery")
                    }else {
                        setError('')
                    setPost([...post,{title:postState.post.title, body:postState.post.body, id:x, user_id:p.id}])
                    setPostState(...postState,post.title = '', post.body = '')
                    setX(q=>q+1)     
                                       
                    }
                }
                }>
                    Add Post
                </button>
                <div>{errorrr}</div>
            </div>
            <h1>Posts</h1>
            <div>
            {
            post.map((a)=>{
                if(p.id == a.user_id){
                    return <div key={a.id}>
                        <p>{a.title}</p>
                        <p>{a.body}</p>
                        <button onClick={()=>setPost(post.filter(v=>v.id != a.id))}>
                                delete
                        </button>
                </div>  
                }
            })}
            </div>

        </div>
    )
}

export default Posts;