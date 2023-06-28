import React from 'react'
import { NavLink } from 'react-router-dom'
import '../components/styles/Publish.css'

const Publish = () => {
  return (
    <div className='courses'>
      <form action="">
      <h5>Home / Dashboard / <span> My Courses</span></h5>
       <h1>My Courses</h1>
        <div className="Add-Course">
          <div className="float-child">
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
               <NavLink to='/Publish'>3</NavLink>
              </button>
              <label htmlFor="">Publish</label>
              </div>
            </div>
                <form action="" id="touch">
                  <h1>Publish Settings</h1>
                  <label className='lab'><input type="checkbox"/>Make This Course Public</label>                  
                </form>
            </div>
            <div className="press">
              <div className="row-10">
                <NavLink to="/AddPages">
                  <button>Back</button>
                </NavLink>
              </div>
              <div className="row-15">
                <NavLink>
                  <button>Save as Draft</button>
                </NavLink>
              </div>
              <div className="row-20">
                <NavLink>
                  <button>Save and Publish</button>
                </NavLink>
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
  )
}

export default Publish
