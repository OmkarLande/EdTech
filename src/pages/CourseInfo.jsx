import React from 'react';
import { NavLink } from 'react-router-dom';
import '../components/styles/CourseInfo.css';
import Sidebar2 from "../components/Common/Sidebar2";

const CourseInfo = () => {
  return (
    <>
    <Sidebar2 />
    <div className='display'>
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
              <NavLink to='/Publish'>3</NavLink>
            </button>
            <label htmlFor="">Publish</label>
        </div>
        </div>
          <form action="" method='post'>
            <div className="tit-25">
              <label htmlFor="">Course Title</label><br />
              <input type="text" placeholder='Enter Course Title' />
            </div>
            <div className="tit-50">
              <label htmlFor="">Course Short Description</label><br />
              <input type="text" placeholder='Enter Course Description' />
            </div>
            <div className="tit-25">
              <label htmlFor="">Price</label><br />
              <input type="text" placeholder='Enter Price' />
            </div>
            <div className="tit-25">
              <label htmlFor="">Category</label><br />
              <input type="text" placeholder='Choose Category' />
            </div>
            <div className="tit-25">
              <label htmlFor="">Tags</label><br />
              <input type="text" placeholder='Choose a Tag' />
            </div>
            <div className="tit-50">
              <label htmlFor="">Course Thumbnail</label><br />
              <textarea rows="2" type="text" placeholder='Drag and Drop an image, 
              or Browse Max 6MB each (12MB for videos)'></textarea>
            </div>
            <div className="tit-50">
              <label htmlFor="">Benefits of the Course</label><br />
              <input type="text" placeholder='Enter Benefits of the Course' />
            </div>
            <div className="tit-25">
              <label htmlFor="">Requirments/Instructions</label><br />
              <input type="text" placeholder='Enter Requirments/Instructions' />
            </div>
            <button>
              <NavLink to="/CourseBuilder">Add</NavLink>
            </button> 
          </form>
          <NavLink to="/CourseBuilder">
          <button className='next'>
            <label htmlFor="">Next</label>
          </button>
          </NavLink>            
      </div>
      <div className="Tips-form">
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
  )
}

export default CourseInfo
