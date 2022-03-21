import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TagIcon from '@mui/icons-material/Tag';
import {Button} from '@material-ui/core';

function Sidebar() {
  return (
    <div className='sidebar'>
        
        <TwitterIcon className='sidebar-twitter-icon'/>

        <SidebarOption active Icon={HomeIcon} text='Home'/>
        <SidebarOption Icon={TagIcon} text='Explore'/>
        <SidebarOption Icon={NotificationsNoneIcon} text='Notifications'/>
        <SidebarOption Icon={MailOutlineOutlinedIcon} text='Messages'/>
        <SidebarOption Icon={BookmarkBorderIcon} text='Bookmarks'/>
        <SidebarOption Icon={ListAltIcon} text='Lists'/>
        <SidebarOption Icon={PermIdentityIcon} text='Profile'/>
        <SidebarOption Icon={MoreHorizIcon} text='More'/>
        
        <Button variant='outlined' className='sidebar-tweet-btn' fullWidth>Tweet</Button>{/* Variant is a style provided by material ui*/}
    </div>
  )
}

export default Sidebar