import React from 'react'
import './PostingProject.css'
import { Autocomplete, Checkbox, IconButton, InputBase, Paper, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PinCode from '../FieldsComponent/Pincode';


const PostingProject = () => {

  const bookingCategories = [
    { label: "Hotel Booking" },
    { label: "Flight Booking" },
    { label: "Event Reservations" },
    { label: "Car Rentals" }
  ];


  return (
    <div className='post-project container'>
      <article className='img-post-container'>
        <img src='./photos/postProject.svg' alt='creating post' />
      </article>
      <section className="project-post-form">
        {/* note container */}
        <aside className="post-instructions" aria-label="Project Posting Instructions">
          <article >
            <h2> Note </h2>
            <ul>
              <li>Precision is key! Customers who provide clear descriptions get optimal proposals for easy project completion.</li>
              <li>To make it better, we suggest you upload relevant materials (pictures, documents, specifications, etc.) for clarity.</li>
            </ul>
          </article>

        </aside>

        {/* */}
        <h1 className='topic-post-project' >  Post a Project </h1>
        <section className='post-form'>
          <h5> Select  a revelant category  so that can find your project </h5>
          <div className='post-input-container'>
            <label htmlFor="category">Category</label>
            <Autocomplete
              disablePortal
              options={bookingCategories}
              sx={{ width: '100%' }}
              renderInput={(params) => <TextField {...params} id="category" />}
            />

          </div>
          <div className='post-input-container'>
            <label htmlFor="sub-category"> Sub-Categories </label>
            <Autocomplete
              disablePortal
              options={bookingCategories}
              sx={{ width: '100%' }}
              renderInput={(params) => <TextField {...params} id="sub-category" />}
            />
          </div>

          <div className='post-input-container'>
            <label htmlFor="project-title">Project Title</label>
            <TextField
              sx={{ width: '100%' }}
              variant="filled"
              id="project-title"

              InputLabelProps={{ shrink: true }}  // ✅ Correct way to apply shrink
            />
          </div>
          <div className='post-input-container'>
            <label htmlFor="project-desc">Project Title</label>
            <textarea id="project-desc" />
          </div>

          <div className='post-input-container' >
            <p> Budget Type </p>
            <div className='btn-group' style={{ gap: '8px' }}>
              <button> Fixed </button>
              <button> Range </button>
              <button> No Idea </button>
            </div>
          </div>

          <div className='post-input-container'>
            <TextField
              sx={{ width: '100%' }}
              variant="filled"
              label="Flexible"
              InputLabelProps={{ shrink: true }}
            />
          </div>
          <div className='post-input-container'>
            <p> Preffered Location </p>
            <Paper
              component="form"
              sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: { xs: '90%', sm: '90%', md: '90%', lg: '90%' },
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


            </Paper>
          </div>
          <div className='post-input-container'>
            <p> Post Code</p>
            <PinCode />
          </div>
          <h3>Project Duration Days </h3>
          <div className='post-input-container date'>
            <p>  Start Date </p>
            <input type='date' />
          </div>
          <div className='post-input-container date'>
            <p>  End Date </p>
            <input type='date' />
          </div>

          <p style={{ textAlign: "center", "fontSize": '25px', marginTop: "10px" }}>
            <Checkbox defaultChecked color="success" />
            I Agree the <Typography component="span" color="primary">
              Terms & Condition
            </Typography>
          </p>
          <div className='post-input-container'>
            <div className='btn-group'>
              <button style={{ background: "#00D279",color:"#003F6B" }}> Post a Project </button>
              <button style={{ background: "#CB4500" }} > Cancel </button>

            </div>
          </div>

        </section>
      </section>

    </div >
  )
}

export default PostingProject