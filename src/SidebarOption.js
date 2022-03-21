import React from 'react'
import './SidebarOption.css'

function SidebarOption({active, text, Icon}) { //Components are capitalized when passed as props
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>{/*Add class if componenet has active property*/}
        <Icon />
        <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption