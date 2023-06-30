import React, { useState } from 'react'
import Sidebar2 from '../components/Common/Sidebar2'
import Sidebar from '../components/Common/Sidebar'
import '../components/styles/InstructorCourses.css'
import deleteImage from '../../src/assests/images/delete.png'

function InstructorCourses() {
    let courses = []

    let course = ()=>{
        return(
            <div className="course">
                <h2>Title</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum totam a mollitia! Praesentium culpa expedita delectus omnis quos adipisci amet </p>
                <div className="date-created">
                    <p>December 12, 2021</p>
                </div>
                <div className="publish-status">
                    <p>Drafted</p>
                </div>
                <p className='price'>500</p>
                <button><img src={deleteImage} alt="" /></button>
                <button><img src={deleteImage} alt="" /></button>
            </div>
        )
    }
    courses.map(course)
  return (
    <>
        <Sidebar2/>  
        <div className="location">
            <p>Home/ Dashboard/ My Portfolio</p>
        </div>
        <h1>My Courses</h1>
        <div className="courses">
            {courses}
        </div>

    </>

  )
}

export default InstructorCourses