import React from 'react'
import "./css/sidebar.css"
import {Avatar} from "@material-ui/core"
import { useSelector } from 'react-redux'
import { selectUser } from './features/counter/userSlice'
function Sidebar() {
    const user = useSelector(selectUser)
  return (
    <div className='sidebar'>
    <div className='sidebar__profile'>
        <img src='https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105__480.png' alt='sidebar-logo' />

         <div className='profile__details'>
             <Avatar src={user.photoURL}/>
             <h4>{user.displayName}</h4>
             <p>Web Developer</p>
         </div>
         <div className='profile__stats'>
             <span>Who viewed your profile</span>
             <span className='stat__number'>20</span>
         </div>
         <div className='profile__stats'>
             <span>Connection<br /><b>Grow your Network</b></span>
             <span className='stat__number'>120</span>
         </div>
    </div>

    <div className='sidebar__recent'>
        <p>Groups Interested In</p>
        <p className='hash'><span>#</span>branding</p>
        <p className='hash'><span>#</span>marketing</p>
        <p className='hash'><span>#</span>web development</p>
        <p className='hash'><span>#</span>programming</p>
        <p className='hash'><span>#</span>react js</p>
        <p className='hash'><span>#</span>redux toolkit</p>
    </div>
      
    </div>
  )
}
export default Sidebar;
