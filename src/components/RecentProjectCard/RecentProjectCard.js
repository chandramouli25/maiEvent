import React from 'react'
import './RecentProjectCard.css'

const RecentProjectCard = () => {

    

    return (
        <div className='recent-project-card'>
            <h2> BedRoom inovations </h2>
            <img src='/photos/bedroom.svg' alt='bedroom' />
            <div className='content'>
                <h5> Kitchen WorkShop </h5>
                <p> Bristol - England </p>
                <p> Slab - Marble </p>
                <p> Duration : completed </p>



            </div>
            <p className='btn-blue'>
                View Project
            </p>
        </div>
    )
}

export default RecentProjectCard