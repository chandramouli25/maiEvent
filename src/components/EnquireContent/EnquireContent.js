import React from 'react'
import './EnquireContent.css'

const EnquireContent = () => {
    return (
        <div className='enquiry-container contianer'>
            <h1> Enquiry now </h1>
            <div className='enquiry-form-container'>
                <img src='/photos/enquery.svg' alt='engqury-content' />

                <div className='enquiry-form'>
                    <div className='post-input-container'>
                        <p> Name </p>
                        <input type='text' />
                    </div>
                    <div className='post-input-container'>
                        <p>  Mobile  </p>
                        <input type='number' />
                    </div>
                    <div className='post-input-container'>
                        <p> Email ID  </p>
                        <input type='email' />
                    </div>
                    <div className='post-input-container'>
                        <p> Site Location </p>
                        <input type='text' />
                    </div>

                    <div className='post-input-container'>
                        <button>
                            Get a Quates
                        </button>

                    </div>

                    <p style={{textAlign:'center'}}> we ll get back to you  </p>
                </div>
            </div>
        </div>
    )
}

export default EnquireContent