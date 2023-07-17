import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Common/Navbar'
import Login from './pages/Login'
import Instructorlogin from './pages/Instructorlogin'
import VerifyEmail from './pages/Verifyemail'
import Studentsignin from './pages/Studentsignin'
import Instructorsignin from './pages/Istructorsignin'
import Studentprofile from './pages/Studentprofile'
import Instructorprofile from './pages/Instructorprofile'
import Home from './pages/Home'
import Resetpassword from "./pages/Resetpassword"
import About from './pages/About'
import ResendEmail from "./pages/Reset"
import OpenRoute from './components/core/Auth/OpenRoute'
import Createpassword from './pages/Createpassword'

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
        
    
    </div>
  )
}

export default App