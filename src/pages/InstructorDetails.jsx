import React from 'react'
import "../components/styles/InstructorDetails.css";

function InstructorDetails() {
  return (
    <>
        <h1>My Profile</h1>
        <div className="profile-image" id='photo'>
            <img src="https://picsum.photos/200/300" alt="profile"/>
            <button>Edit</button>
        </div>
        <div className="personal-details">
            <h2>Personal Details</h2>
            <div className="details">
                <label htmlFor="first-name">First Name</label>
                <label htmlFor="last-name">Last Name</label>
                <label htmlFor="email">Email</label>
                <label htmlFor="phone">Phone</label>
            </div>
            
        </div>
    </>
  )
}

export default InstructorDetails