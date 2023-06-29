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

function App() {
  return (
    <div className='w-screen min-h-screen bg-white flex flex-col font-roboto'>
      <Navbar />
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Instructorlogin" element={<Instructorlogin />}></Route>
        <Route path="/Studentsignin" element={<Studentsignin />}></Route>
        <Route path="/Instructorsignin" element={<Instructorsignin />}></Route>
        <Route path="/Studentprofile" element={<Studentprofile />}></Route>
        <Route path="/Instructorprofile" element={<Instructorprofile />}></Route>
        <Route path="/VerifyEmail" element={<VerifyEmail />}></Route>
       </Routes>
        
    
    </div>
  )
}

export default App