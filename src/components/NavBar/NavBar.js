import React from 'react'
import './NavBar.css'
import { Divider } from '@mui/material'

const NavBar = ({changingcontainer}) => {
    

    // 
    return (

        <nav className='nav-bar container'>
            <img src='./photos/projectName.svg' alt='project name' />

            <ul className='nav-list'>
                <Divider orientation='vertical' flexItem sx={{ bgcolor: 'grey', width: 0, margin: '0 0px' }} />
                <li onClick={() => changingcontainer("liveProject")}> Home </li>
                <Divider orientation='vertical' flexItem sx={{ bgcolor: 'grey', width: 0, margin: '0 0px' }} />
                <li> How it works </li>
                <Divider orientation='vertical' flexItem sx={{ bgcolor: 'grey', width: 0, margin: '0 0px' }} />
                <li onClick={() => changingcontainer("projectlist")} > Project </li>
                <Divider orientation='vertical' flexItem sx={{ bgcolor: 'grey', width: 0, margin: '0 0px' }} />
                <li> Blogs </li>
                <Divider orientation='vertical' flexItem sx={{ bgcolor: 'grey', width: 0, margin: '0 0px' }} />
                <li> DIY Worktops </li>
            </ul>
        </nav>
    )
}

export default NavBar