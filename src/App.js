import React from 'react'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Navbar from './components/Common/Navbar'
import Login from './pages/Login'
import Instructorlogin from './pages/Instructorlogin'
import VerifyEmail from './pages/VerifyEmail'
import Studentsignin from './pages/Studentsignin'
import Instructorsignin from './pages/Istructorsignin'
import Studentprofile from './pages/Studentprofile'
import Instructorprofile from './pages/Instructorprofile'
import Home from './pages/Home'
import InstructorDetails from './pages/InstructorDetails'

function App() {
  return (
    <>
      <Navbar />
      <InstructorDetails />
    </>
  )
}

export default App