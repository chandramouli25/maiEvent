import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        
        <p> Privacy Policy</p>
        <p> Terms & Conditios</p>
        <p> Contact us </p>
        <h5> All copyrights Reserved @MAI </h5>
        
        <div style={{display:'flex',gap:"8px"}}> 
             <p>Social networks : </p>
            <img src='/photos/socialmedia/facebook.png' alt='facebook'/>
            <img src='/photos/socialmedia/twitter.png' alt='twitter'/>
            <img src='/photos/socialmedia/google.png' alt='google'/>
            <img src='/photos/socialmedia/instagram.png' alt='instagram'/>
            <img src='/photos/socialmedia/watsup.png' alt='linkedin'/>
        
        </div>
    </footer>
  )
}

export default Footer