import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';

function Sidebar() {
  return (
    <div className='sidebar'>
        {/*Twitter icon*/}
        <TwitterIcon />

        <SidebarOption icon={HomeIcon} text='Home'/>
        <SidebarOption text='Notifications'/>
        <SidebarOption text='Explore'/>
        <SidebarOption />
        <SidebarOption />
        {/*SidebarOption*/}
        {/*SidebarOption*/}
        {/*SidebarOption*/}
        {/*SidebarOption*/}
        {/*SidebarOption*/}
        {/*SidebarOption*/}

        {/*Button -> Tweet*/}
    </div>
  )
}

export default Sidebar