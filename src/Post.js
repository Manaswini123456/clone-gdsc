import { Avatar } from '@material-ui/core'
import React from 'react'
import "./css/post.css"
import MoreVertIcon  from '@material-ui/icons/MoreVert';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import SendIcon from '@material-ui/icons/Send';
import ShareLocationIcon from '@material-ui/icons/Share';

function Post({name,description,message,photoURl}) {
  return (
    <div className='posts'>
    <div className='post__header'>
      <div className='post__headerLeft'>
         <Avatar />
         <div className='post_profile_details'>
             <h3>{name}</h3>
             <p>{description}</p>
         </div>
      </div>
      
      <MoreVertIcon />  
    </div>
    <div className='post__body'>
      <p>{message}</p>
    </div>

    <div className='post__footer'>
      <div className='post__footer__option'>
      
           <ThumbUpIcon className='count'/>
           
           <span className='count'>68</span>
      </div>
      <div className='post__footer__option'>
           <CommentIcon />
           <span>Comment</span>
      </div>
      <div className='post__footer__option'>
           <ShareLocationIcon />
           <span>Share</span>
      </div>
      <div className='post__footer__option'>
           <SendIcon />
           <span>Send</span>
      </div>
    </div>
    </div>
  )
}

export default Post;
