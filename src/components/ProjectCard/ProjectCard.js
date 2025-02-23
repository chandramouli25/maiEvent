import React from 'react'
import './ProjectCard.css'
import {   Divider } from '@mui/material'

// const ProjectCard = () => {
//     return (
//         <div
//             className='project-card'
//             sx={{
//                 display: "flex",
//                 flexDirection: { xs: "column", sm: "row" }, // Column on mobile, row on larger screens
//                 gap: "10px",
//                 alignItems: "center",
//                 padding: "0",
//                 boxShadow: "none",
//                 border: "1px solid #ccc",
//                 borderRadius: "8px",
//                 width: "100%", // Ensures it adjusts to screen size
//                 mx: "0" // Centers it horizontally
//             }}
//         >
//             <img src='./photos/appartment.svg' className='img-project' alt='project name' />
//             <div className='card-content'>

//                 <p className='intern-counts'> intern : 0 </p>
//                 <h1>Kitchen Worktop </h1>
//                 <aside className='sub-header'>
//                     <div style={{ display: 'flex', gap: '5px' }}>
//                         <button> Kitchen </button>
//                         <button> Splachback </button>
//                     </div>
//                     <p > Posted 07/08/24 </p>
//                 </aside>
//                 {/*------  project details container --- */}
//                 <article className='details-project'>
//                     <section>
//                         <p>Project ID : MAIID123</p>
//                         <p> Bristol - England </p>
//                         <p> Duration : completed</p>

//                     </section>
//                     <Divider orientation='vertical' ></Divider>
//                     <section>
//                         <p>Price - Fixed</p>
//                         <p> Expiry Date - Marble </p>
//                     </section>
//                 </article>
//                 {/*  ------  project status ----------  */}
//                 <Divider orientation='horizontal'></Divider>
//                 <article className='project-status'>
//                     <p> Project Stauts: Active</p>
//                     <p> Last Update: 2024-08-12 </p>
//                     <p> Proposal: 23  </p>
//                 </article>
//                 {/*  project description */}
//                 <article className='project-desc'>
//                     <h2> Description </h2>
//                     <p> Durable, heat-resistant, and available in various colors and patterns. Engineered stone, highly durable, non-porous, and low maintenance. The visible.....</p>
//                 </article>
//                 <div className='btn-group'>
//                         <button className='primary'> view </button>
//                         <button className='primary'> Send a Proposal </button>
//                         <button className='primary'> Apply Intership </button>
//                 </div>
//             </div>
//         </div>
//     )
// }



const ProjectCard =( {projectData}) =>{
    return ( <div
        className='project-card'
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: "10px",
          alignItems: "center",
          padding: "0",
          boxShadow: "none",
          border: "1px solid #ccc",
          borderRadius: "8px",
          width: "100%",
          mx: "0"
        }}
      >
        <img src={projectData.image} className='img-project' alt={projectData.title} />
  
        <div className='card-content'>
          <p className='intern-counts'>Intern: {projectData.internCount}</p>
          <h1>{projectData.title}</h1>
  
          <aside className='sub-header'>
            <div style={{ display: 'flex', gap: '5px' }}>
              {projectData.tags.map((tag, index) => (
                <button key={index}>{tag}</button>
              ))}
            </div>
            <p>Posted {projectData.postedDate}</p>
          </aside>
  
          {/* Project Details */}
          <article className='details-project'>
            <section>
              <p>Project ID: {projectData.projectDetails.id}</p>
              <p>{projectData.projectDetails.location}</p>
              <p>Duration: {projectData.projectDetails.duration}</p>
            </section>
            <Divider orientation='vertical' />
            <section>
              <p>Price - {projectData.pricingDetails.price}</p>
              <p>Expiry Date - {projectData.pricingDetails.expiry}</p>
            </section>
          </article>
  
          <Divider orientation='horizontal' />
  
          {/* Project Status */}
          <article className='project-status'>
            <p>Project Status: {projectData.projectStatus.status}</p>
            <p>Last Update: {projectData.projectStatus.lastUpdate}</p>
            <p>Proposal: {projectData.projectStatus.proposalCount}</p>
          </article>
  
          {/* Project Description */}
          <article className='project-desc'>
            <h2>Description</h2>
            <p>{projectData.description}</p>
          </article>
  
          {/* Buttons */}
          <div className='btn-group'>
            {projectData.buttons.map((btn, index) => (
              <button key={index} className='primary'>
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>)
}
export default ProjectCard

