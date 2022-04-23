import React, {useEffect} from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Feed from './Feed'
import './App.css';
import Widget from './Widget';
import Login from "./Login"
import { useDispatch, useSelector } from 'react-redux';
import { loginuser, logoutuser, selectUser } from './features/counter/userSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
const dispatch = useDispatch();
  useEffect(() =>{
    auth.onAuthStateChanged((userAuth) =>{
      if (userAuth){
        dispatch(loginuser({
          email:userAuth.email,
          uid:userAuth.uid,
          photoURL:userAuth.photoURL,
          displayName: userAuth.displayName
        }))
      }else{
        dispatch(logoutuser())

      }
    })
     //console.log("rendered")
  },[])

  console.log(user)
  return (
    <>
    {
      !user ? (<Login />):(
        <div className='app_wrapper'>
       <Header />
       <div className='app_body'>
        <Sidebar />
        <Feed />
        <Widget />
       </div>
       
    </div> 

      )
    }
  </> )}


export default App;
