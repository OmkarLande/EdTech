import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Common/Navbar'
import Login from './pages/Login'
import Instructorlogin from './pages/Instructorlogin'
import Resetpassword from './pages/Resetpassword'
import VerifyEmail from './pages/VerifyEmail'
import Createpassword from './pages/Createpassword'
import Reset from './pages/Reset'
import CourseInfo from './pages/CourseInfo'
import CourseBuilder from './pages/CourseBuilder'
import AddPages from './pages/AddPages'
import Publish from './pages/Publish'
import Studentsignin from './pages/Studentsignin';
import Instructorsignin from './pages/Istructorsignin';
import Studentprofile from './pages/Studentprofile';
import Instructorprofile from './pages/Instructorprofile';
import Studenteditprofile from './pages/Studenteditprofile';
import Instructoreditprofile from './pages/Instructoreditprofile';
import Home from './pages/Home'
import Checkemail from './pages/Checkemail'
import Sidebar from './components/Common/Sidebar'



function App() {
  return (
    <div className='w-screen min-h-screen bg-white flex flex-col font-roboto'>
      <Navbar />
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/Studentprofile" element={<Studentprofile />}></Route>
        <Route path="/Instructorprofile" element={<Instructorprofile />}></Route>
        <Route path='/ResetComplete' element={<ResendEmail/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route
          path="/Instructorlogin"
          element={
            
              <Instructorlogin />
            
          }
        />
        
        <Route
          path="/Login"
          element={
            
              <Login />
            
          }
        />

        <Route
          path="/Studentsignin"
          element={
            
              <Studentsignin />
            
          }
        />
        <Route
          path="/Instructorsignin"
          element={
            
              <Instructorsignin />
            
          }
        />

    <Route
          path="/forgetPassword"
          element={
            
              <Resetpassword />
            
          }
        />  
        <Route 
          path='/update-password/:id'
          element={
            <Createpassword/>
          }
        />

      <Route
          path="/verify-email"
          element={
            
              <VerifyEmail />

          }
        />   

      

       </Routes>
        
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Instructorlogin" element={<Instructorlogin />}></Route>
          <Route path="/Resetpassword" element={<Resetpassword />}></Route>
          <Route path="/Checkemail" element={<Checkemail />}></Route>
          <Route path="/Createpassword" element={<Createpassword />}></Route>
          <Route path="/Reset" element={<Reset />}></Route>
          <Route path="/Studentsignin" element={<Studentsignin />}></Route>
          <Route path="/Instructorsignin" element={<Instructorsignin />}></Route>
          <Route path="/Studentprofile" element={<Studentprofile />}></Route>
          <Route path="/Instructorprofile" element={<Instructorprofile />}></Route>
          <Route path='/Studenteditprofile' element={<Studenteditprofile />}></Route>
          <Route path='/Instructoreditprofile' element={<Instructoreditprofile />}></Route>
          <Route path="/VerifyEmail" element={<VerifyEmail />}></Route>
          <Route path="/CourseInfo" element={<CourseInfo />}></Route>
          <Route path="/CourseBuilder" element={<CourseBuilder />}></Route>
          <Route path="/Addpages" element={<AddPages />}></Route>
          <Route path="/Publish" element={<Publish />}></Route>
        </Routes>
      </BrowserRouter> 
    </div>
    
  )
}

export default App