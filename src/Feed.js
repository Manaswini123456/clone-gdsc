import React,{useState,useEffect} from 'react'
import {Avatar} from "@material-ui/core"
import PhotoIcon from "@material-ui/icons/Photo"
import VideocamIcon from '@material-ui/icons/Videocam'
import TodayIcon from "@material-ui/icons/Today"
import AssignmentIcon from "@material-ui/icons/Assignment"
import "./css/feed.css"
import Post from "./Post"
import firebase from 'firebase'
import { db } from './firebase'
import { useSelector } from 'react-redux'
import { selectUser } from './features/counter/userSlice'
//import FlipMove from 'react-flip-move'
function Feed() {
    const user = useSelector(selectUser)
    const [posts, setPost] =  useState([]);
    const [input, setInput ] = useState();
    const submitPost = (event) =>{
          event.preventDefault();
          alert(input)
          db.collection("posts").add({
              name:user.displayName,
              description:"This is test description",
              message: input,
              photoURL:user.photoURL,
              timestamp : firebase.firestore.FieldValue.serverTimestamp()
          })
          setInput("");
  }  

  useEffect(() => {
      db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot =>{
         setPost(snapshot.docs.map(docs=>({
             id:docs.id,
             data:docs.data()
         })))
      })
  }, [])

  console.log(posts)

  return (
    <div className='feed'>
      <div className='feed__input'>
      <div className='feed__form'>
           <Avatar src={user.photoURL}/>
           <form onSubmit={submitPost}>
           <input type="text" placeholder="Start a post" value={input} onChange={event =>setInput(event.target.value)}/>
           
           </form></div>
      
      <div className='feed__options'>
          <div className='option'>
            <PhotoIcon style={{color:'#70b5f9'}} />
            <span>Photo</span>
          </div>

          <div className='option'>
            <VideocamIcon  style={{color:'#7cf15e'}} />
            <span>Video</span>
          </div>

          <div className='option'>
            <TodayIcon style={{color:'#e7a33e'}} />
            <span>Event</span>
          </div>

          <div className='option'>
            <AssignmentIcon style={{color:'#fc9295'}} />
            <span>Write Article</span>
          </div>
      </div></div>

      {
          posts.map(({id,data:{name,description,message,photoURL}})=>{
              return <Post name={name} description={description} message={message} photoURL={photoURL}/>
          })
      }
      
      
    </div>
  )
}

export default Feed
