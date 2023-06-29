import React from 'react'
import { NavLink } from 'react-router-dom'
import '../components/styles/CourseBuilder.css'

const CourseBuilder = () => {
  return (
      <div className='courses'>
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
            <div className="section">
                <form action="" method='post'>
                    <h2 htmlFor="">Course Builder</h2>
                    <input type="text" id='course' placeholder='Add a section to build your course'/>
                    <div className="topic">
                        <form action="">
                            <h1>Add a Topic</h1>
                            <div className="row-20">
                                <label htmlFor="">Topic Name</label>
                                <input type="text" placeholder='Lesson-01'/>
                            </div>
                            <div className="row-20">
                                <label id='suy' htmlFor="">Topic Summary</label>
                                <input type="text" placeholder='Summary'/>
                            </div>
                            <div className="click">
                                <NavLink to="/AddPages"><input type="Submit" value="Add a Topic" /></NavLink>
                            </div>
                        </form>
                        <div className="create">
                            <NavLink to="/AddPages"><input type="Submit" value="Create Section" /></NavLink>
                        </div>
                    </div>
                </form>
            </div>
            <div className="container">
                <NavLink to="/CourseInfo"><input id='back' type="button" value="Back"/></NavLink>
                <NavLink to="/AddPages"><input id='next' type="button" value="Next"/></NavLink>
            </div>
        </div>
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

export default CourseBuilder
