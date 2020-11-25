import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faMusic} from '@fortawesome/free-solid-svg-icons'


function Sidebar() {
    return (
        <div className="sidebar">
            <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="" />
        
            <SidebarOption title="Home" Icon={<FontAwesomeIcon icon={faHome}/>}/>
            <SidebarOption title="Search" Icon={<FontAwesomeIcon icon={faSearch}/>}/>
            <SidebarOption title="Your Library" Icon={<FontAwesomeIcon icon={faMusic}/>}/>

            
        </div>
    )
}

export default Sidebar