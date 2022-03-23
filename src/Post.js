import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import profile_pic from './avatar.jpg';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
    }) 

{
    return (
        <div className='post'>
            <div className='post-avatar'>
            <Avatar src={profile_pic}/>
            </div>

            <div className='post-body'>
                <div className='post-header'>
                    <div className='post-header-text'>
                        <h3>
                            Daniel Webala {""}<span className='post-header-special'>
                                <VerifiedIcon className='post-badge' fontSize='small'/> @web_d
                            </span>
                        </h3>
                    </div>
            
                    <div className='past-header-description'>
                        <p>Just updated my profile pic. Leave a like for good luck.</p>
                    </div>
                </div>

                <img src={profile_pic} />

                <div className='post-footer'>
                    <ChatBubbleOutlineIcon fontSize='small'/>
                    <RepeatIcon fontSize='small'/>
                    <FavoriteBorderIcon fontSize='small'/>
                    <PublishIcon fontSize='small'/>
                </div>
            </div>

        </div>
    )
}

export default Post
