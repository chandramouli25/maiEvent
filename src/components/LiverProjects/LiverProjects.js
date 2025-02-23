import React, { useEffect, useState } from 'react'
import './LiverProjects.css'
import { IconButton, InputBase, Paper, TextField } from '@mui/material'
import SortIcon from '@mui/icons-material/Sort';
import OngoingProjectCards from '../OngoingProjectCards/OngoingProjectCards';
import RecentProjectCard from '../RecentProjectCard/RecentProjectCard';
import EnquireContent from '../EnquireContent/EnquireContent';
import Footer from '../Footer/Footer';


const LiverProjects = ({changingcontainer}) => {
    const listActivemethod = ['easy', 'efficient', "faster"]
    const [activeMethod, setActiveMethod] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveMethod((prevIndex) => (prevIndex + 1) % listActivemethod.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [listActivemethod.length]);


    const LocationSeachInput = () => {
        return (<Paper
            component="form"
            sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: { xs: '60%', sm: '50%', md: '40%', lg: '30%' },

                border: '2px solid rgba(80, 60, 60, 0.18)',
                boxShadow: 'none',
                borderRadius: '5px'
            }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Your Live Project"
                inputProps={{ 'aria-label': 'Search Your Live Project' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="sort">
                <SortIcon />
            </IconButton>
        </Paper>
        )
    }
    const OngoingProjectJson = [
        {
            title: "Interior Works",
            status: "Progress",
            location: "England",
            image: "/photos/kitchen_img.jpg",
            profile: "/photos/profilimg.svg",
        },
        {
            title: "Stone Fixing",
            status: "Progress",
            location: "England",
            image: "/photos/stone_fixing.jpg",
            profile: "/photos/profilimg.svg",
        },
        {
            title: "Electricals Works",
            status: "Progress",
            location: "England",
            image: "/photos/electricals_works.jpg",
            profile: "/photos/profilimg.svg",
        },
        {
            title: "Interior Works",
            status: "Progress",
            location: "England",
            image: "/photos/kitchen_img.jpg",
            profile: "/photos/profilimg.svg",
        },
        {
            title: "Gardening Setup",
            status: "Progress",
            location: "England",
            image: "/photos/gardening_setup.jpg",
            profile: "/photos/profilimg.svg",
        },
        {
            title: "Kitchen Renovation",
            status: "Progress",
            location: "England",
            image: "/photos/kitchen_renovation1.jpg",
            profile: "/photos/profilimg.svg",
        },
        {
            title: "Kitchen Renovation",
            status: "Progress",
            location: "England",
            image: "/photos/gardening_setup.jpg",
            profile: "/photos/profilimg.svg",
        },
        {
            title: "Kitchen Renovation",
            status: "Progress",
            location: "England",
            image: "/photos/electricals_works.jpg",
            profile: "/photos/profilimg.svg",
        },
        {
            title: "Kitchen Renovation",
            status: "Progress",
            location: "England",
            image: "/photos/electricals_works.jpg",
            profile: "/photos/profilimg.svg",
        },
        {
            title: "Kitchen Renovation",
            status: "Progress",
            location: "England",
            image: "/photos/kitchen_renovation1.jpg",
            profile: "/photos/profilimg.svg",
        },
    ];
    return (
        <div className='liveProject-container'>
            <article className="about-project-live" style={{ background: " url('./photos/live_project.png') no-repeat center center / cover" }}>
                <div className='content'>
                    <h2> Manage Your </h2>

                    <h2> Prjoect   <span>  {listActivemethod[activeMethod]} </span>  </h2>


                    <button onClick={() => changingcontainer("postingProject")} >
                        Explore Project
                    </button>
                </div>

            </article>

            {/* this is for only seach input box */}
            <section className='live-search-container container'>
                {/* placeholder="Search Google Maps" */}
                <h1> LIVE PROJECT </h1>
                <TextField sx={{

                    width: { xs: '60%', sm: '50%', md: '40%', lg: '30%' },

                }} id="outlined-basic" variant="outlined" placeholder="Search Your Live Project " />

                {LocationSeachInput()}
            </section>
            {/* on-going project  */}
            <div style={{ alignItems: 'center', width: '92%', padding: '0px 70px', marginTop: '5px' }}>
                <div className='ongoing-project-container'>
                    {OngoingProjectJson.map((project, index) => (
                        <OngoingProjectCards key={index} CardData={project} />
                    ))}
                </div>
                <p className='viewAll-tag' > View All  </p>
            </div>
            {/* Recent Projects */}
            <div style={{ alignItems: 'center', width: '92%', padding: '0px 70px', marginTop: '5px' }}>
                <div className='ongoing-project-container'>
                    {Array.from({ length: 9 }, (_, index) => (
                        <RecentProjectCard key={index} />
                    ))}
                </div>
                <p className='viewAll-tag' > View All  </p>

                <EnquireContent />
                

                <div style={{marginBottom:'20px'}}>   </div>

            </div>


            <Footer />
        </div >
    )
}

export default LiverProjects