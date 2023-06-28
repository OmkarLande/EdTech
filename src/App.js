<<<<<<< HEAD
import React from 'react'
import { ReactDOM } from 'react-dom'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Navbar from './components/Common/Navbar'
import Login from './pages/Login'
import Instructorlogin from './pages/Instructorlogin'
import Resetpassword from './pages/Resetpassword'
import Verifyemail from './pages/Verifyemail'
import Createpassword from './pages/Createpassword'
import Reset from './pages/Reset'
import MyCourses from './pages/MyCourses'
import CourseInfo from './pages/CourseInfo'
import CourseBuilder from './pages/CourseBuilder'
import AddPages from './pages/AddPages'
import Publish from './pages/Publish'

=======
import React from 'react';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import Login from './pages/Login';
import Instructorlogin from './pages/Instructorlogin';
import VerifyEmail from './pages/VerifyEmail';
import Studentsignin from './pages/Studentsignin';
import Instructorsignin from './pages/Istructorsignin';
import Studentprofile from './pages/Studentprofile';
import Instructorprofile from './pages/Instructorprofile';
import Studenteditprofile from './pages/Studenteditprofile';
import Instructoreditprofile from './pages/Instructoreditprofile';
import Home from './pages/Home'
>>>>>>> eaa804359be1385b3e5f02f5e20c0843ddfd96c3

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Instructorlogin" element={<Instructorlogin />}></Route>
<<<<<<< HEAD
          <Route path="/Resetpassword" element={<Resetpassword />}></Route>
          <Route path="/Verifyemail" element={<Verifyemail />}></Route>
          <Route path="/Createpassword" element={<Createpassword />}></Route>
          <Route path="/Reset" element={<Reset />}></Route>
          <Route path="/MyCourses" element={<MyCourses />}></Route>
          <Route path="/CourseInfo" element={<CourseInfo />}></Route>
          <Route path="/CourseBuilder" element={<CourseBuilder />}></Route>
          <Route path="/Addpages" element={<AddPages />}></Route>
          <Route path="/Publish" element={<Publish />}></Route>
=======
          <Route path="/Studentsignin" element={<Studentsignin />}></Route>
          <Route path="/Instructorsignin" element={<Instructorsignin />}></Route>
          <Route path="/Studentprofile" element={<Studentprofile />}></Route>
          <Route path="/Instructorprofile" element={<Instructorprofile />}></Route>
          <Route path='/Studenteditprofile' element={<Studenteditprofile />}></Route>
          <Route path='/Instructoreditprofile' element={<Instructoreditprofile />}></Route>
          <Route path="/VerifyEmail" element={<VerifyEmail />}></Route>
>>>>>>> eaa804359be1385b3e5f02f5e20c0843ddfd96c3
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App