import { Button, Avatar } from '@mui/material'
import React from 'react'
import './TweetBox.css'
import avatar from './avatar.jpeg';

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox-input'>
                <Avatar src={avatar}/>
                <input placeholder="What's happening?" type='text'/>
            </div>
            <input className='tweetBox-input-image' placeholder='Enter image URL' type='text'/> 
            <Button className='tweetBox-tweet-btn'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox 