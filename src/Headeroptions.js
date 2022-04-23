import React from 'react'
import {Avatar} from '@material-ui/core'
import "./css/header.css"
import { useSelector } from 'react-redux'
import { selectUser } from './features/counter/userSlice'
import firebase from 'firebase'
function Headeroptions({Icon,title,avatar}) {

  const user = useSelector(selectUser)

  return (
    <div className='header__options'>
    {
        Icon && <Icon></Icon>
    }
    {
        avatar && <Avatar name={avatar}src={user.photoURL} onClick={e=>firebase.auth().signOut()}/>
    }
      <span>{title}</span>
    </div>
  )
}

export default Headeroptions