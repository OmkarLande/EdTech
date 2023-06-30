import React from 'react'
import '../components/styles/MyCourses.css'
import { NavLink } from 'react-router-dom'

const MyCourses = () => {
  return (
    <div className='courses'>
       <h5>Home/Dashboard/<span>My Courses</span></h5>
       <h1>My Courses</h1>
       <div className="tap">
       <div className="col-25">
       <button>
        <NavLink to='/CourseInfo'>1</NavLink>
       </button>
       <label htmlFor="">Course Info</label>
       </div>
       <div className="col-50">
       <button>
        <NavLink to='/CourseBuilder'>2</NavLink>
       </button>
       <label htmlFor="">Course Builder</label>
       </div>
       <div className="col-75">
       <button>
        <NavLink to='/'>3</NavLink>
       </button>
       <label htmlFor="">Publish</label>
       </div>
       </div>
    </div>
  )
}

export default MyCourses
