import React from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
        {/* Header */}
        <div className='feed-header'>
            <h2>Home</h2>
        </div>
        {/* TweetBod */}
        <TweetBox />
        {/* Post */}
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        {/* Post */}
        {/* Post */}
        {/* Post */}
    </div>
  )
}

export default Feed