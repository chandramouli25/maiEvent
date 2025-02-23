import React from 'react'
import './ProjectsContainer.css'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DownArrrow from '@mui/icons-material/ArrowDownward';
import ProjectCard from '../ProjectCard/ProjectCard';
import Footer from '../Footer/Footer';


const ProjectsContainer = () => {
    const porjectListJson = [
        {
          "image": "./photos/appartment.svg",
          "title": "Kitchen Worktop",
          "internCount": 0,
          "postedDate": "07/08/24",
          "tags": ["Kitchen", "Splashback"],
          "projectDetails": {
            "id": "MAIID123",
            "location": "Bristol - England",
            "duration": "Completed"
          },
          "pricingDetails": {
            "price": "Fixed",
            "expiry": "Marble"
          },
          "projectStatus": {
            "status": "Active",
            "lastUpdate": "2024-08-12",
            "proposalCount": 23
          },
          "description": "Durable, heat-resistant, and available in various colors and patterns. Engineered stone, highly durable, non-porous, and low maintenance.",
          "buttons": [
            { "label": "View", "action": "view" },
            { "label": "Send a Proposal", "action": "sendProposal" },
            { "label": "Apply Internship", "action": "applyInternship" }
          ]
        },
        {
          "image": "./photos/appartment.svg",
          "title": "Bathroom Renovation",
          "internCount": 2,
          "postedDate": "06/10/24",
          "tags": ["Bathroom", "Tiling"],
          "projectDetails": {
            "id": "BTH456",
            "location": "London - UK",
            "duration": "Ongoing"
          },
          "pricingDetails": {
            "price": "Hourly",
            "expiry": "Ceramic"
          },
          "projectStatus": {
            "status": "Pending",
            "lastUpdate": "2024-10-05",
            "proposalCount": 15
          },
          "description": "Modern bathroom renovation with high-quality waterproof tiling and stylish design choices.",
          "buttons": [
            { "label": "View", "action": "view" },
            { "label": "Send a Proposal", "action": "sendProposal" },
            { "label": "Apply Internship", "action": "applyInternship" }
          ]
        },
        {
          "image": "./photos/appartment.svg",
          "title": "Office Interior Design",
          "internCount": 3,
          "postedDate": "05/15/24",
          "tags": ["Office", "Furniture"],
          "projectDetails": {
            "id": "OFC789",
            "location": "Manchester - UK",
            "duration": "3 Months"
          },
          "pricingDetails": {
            "price": "Contract",
            "expiry": "Custom Design"
          },
          "projectStatus": {
            "status": "Completed",
            "lastUpdate": "2024-07-20",
            "proposalCount": 30
          },
          "description": "Custom office interior design with ergonomic furniture, efficient space planning, and modern aesthetics.",
          "buttons": [
            { "label": "View", "action": "view" },
            { "label": "Send a Proposal", "action": "sendProposal" },
            { "label": "Apply Internship", "action": "applyInternship" }
          ]
        },
        {
          "image": "./photos/appartment.svg",
          "title": "Luxury House Painting",
          "internCount": 1,
          "postedDate": "09/01/24",
          "tags": ["Painting", "Exterior"],
          "projectDetails": {
            "id": "HSE234",
            "location": "Liverpool - UK",
            "duration": "2 Weeks"
          },
          "pricingDetails": {
            "price": "Per Sq Ft",
            "expiry": "Matte Finish"
          },
          "projectStatus": {
            "status": "In Progress",
            "lastUpdate": "2024-09-10",
            "proposalCount": 10
          },
          "description": "Luxury house painting using premium-quality paints, offering a long-lasting and elegant finish.",
          "buttons": [
            { "label": "View", "action": "view" },
            { "label": "Send a Proposal", "action": "sendProposal" },
            { "label": "Apply Internship", "action": "applyInternship" }
          ]
        }
      ]
      
    const searchBox = () => {
        return (<Paper
            component="form"
            sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: { xs: '90%', sm: '70%', md: '50%', lg: '40%' },
                backgroundColor: '#F5F5F5',
                border: '1px solid #8b53532e',
                boxShadow: 'none',
                borderRadius: '5px'
            }}
        >

            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder=""
                inputProps={{ 'aria-label': 'Search' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>


        </Paper>)
    }

    return (
        <section className='projects-content'>
            <article className="about-project">
                <p>
                    Post your projects with specifications and details explaining the depth of the project,
                    materials needed, time limit to be taken, and budget.
                </p>
            </article>

            <section className='project-lists container'>
                <h1>Project List</h1>

                <section className='project-search-container'>
                    {searchBox()}

                    <aside className='filter-container'>
                        <img src='./photos/filter.svg' alt='Filter icon' />

                        <div className='grey-btn sort-btn' aria-label="Sort projects">
                            SORT
                            <Divider orientation="vertical" sx={{ height: 28, m: 0.5 }} />
                            <DownArrrow />
                        </div>
                    </aside>
                </section>

                {/*  Project lists cards will be in this below container */}
                <section className='project-card-list'>
                        

                        {porjectListJson.map((projectJson)=>{
                            return (<ProjectCard  projectData={projectJson} />)
                        })}
                </section>
            </section>

            <Footer />
        </section>

    )
}

export default ProjectsContainer