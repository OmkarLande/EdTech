import React from 'react'
import { NavLink } from 'react-router-dom'
import '../components/styles/AddPages.css'
import Button from "react-bootstrap/Button";
import Sidebar2 from '../components/Common/Sidebar2';
const AddPages = () => {
  return (
    <>
    <Sidebar2 />
    <div className='courses'>
    <form action="">
    <h5>Home / Dashboard / <span> My Courses</span></h5>
     <h1>My Courses</h1>
      <div className="Add-Course">
        <div className="float-child">
        <div className="col-25">
            <button className='onclick'>
             <NavLink to='/CourseInfo'>1</NavLink>
            </button>
            <label htmlFor="">Course Info</label>
        </div>
            <div className="col-50">
            <button className='onclick'>
             <NavLink to='/CourseBuilder'>2</NavLink>
            </button>
            <label htmlFor="">Course Builder</label>
        </div>
            <div className="col-75">
            <button className='onclick'>
             <NavLink to='/'>3</NavLink>
            </button>
            <label htmlFor="">Publish</label>
            </div>
          </div>
      </div>
      <div className="section">
        <form action="" method='post'>
            <h2 htmlFor="">Course Builder</h2>
            <div className="lesson">
              <form action="" id="lesson">
                
              </form>
              <input type="text" placeholder='Add a Section to build your course' />
              <div className="create">
                  <NavLink><Button>Create Section</Button></NavLink>
              </div>
            </div>
        </form>
        <div className="container">
              <NavLink to="/CourseInfo"><input id='back' type="button" value="Back"/></NavLink>
              <NavLink to="/Publish"><input id='next' type="button" value="Next"/></NavLink>
          </div>
      </div>
    </form>
    <div className="grid-child">
        <form action="" method='post'>
          <h2>Course Upload Tips</h2>
          <div className="imp">
            <li>Set the Course Price Option or make it Free.</li>
            <li>Standard size for the course Thumbnail is 1024x576.</li>
            <li>Video Section controls the course overview video.</li>
            <li>Course Builder is where you create & organize a course.</li>
            <li>Add Topics in the course Builder Section to create lessons, quizzes and assignments.</li>
            <li>Information from the Additional Data section shows up on the course single page.</li>
            <li>Make Announcements to notify any important.</li>
            <li>Notes to all enrolled stundents at once.</li>
          </div>
        </form>
      </div>
  </div>
  </>
  );
}

export default AddPages
