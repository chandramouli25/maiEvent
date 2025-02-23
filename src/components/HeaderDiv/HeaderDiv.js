import React from 'react'
import './HeaderDiv.css'

const HeaderDiv = ({changingcontainer}) => {
    
    return (
        <div className='Header container'>
            <div className='title-bar'>
                <img src='./photos/logo.svg' alt='logo' />
                <div className='header-part'>
                    <p className='grey-btn' onClick={() => changingcontainer("postingProject")}>
                        post a project
                    </p>
                    <img  src='./photos/shopping.svg' alt='' className='shopping-logo' />
                    <p> Login </p>
                    <p> Sign up </p>
                </div>
            </div>
        </div>
    )
}

export default HeaderDiv