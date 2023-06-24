import React from 'react'
import { ReactDOM } from 'react'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Navbar from './components/Common/Navbar'
import Login from './pages/Login'
import Instructorlogin from './pages/Instructorlogin'
import VerifyEmail from './pages/VerifyEmail'
import Studentsignin from './pages/Studentsignin'
import Instructorsignin from './pages/Istructorsignin'

import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Instructorlogin" element={<Instructorlogin />}></Route>
          <Route path="/Studentsignin" element={<Studentsignin />}></Route>
          <Route path="/Instructorsignin" element={<Instructorsignin />}></Route>
          <Route path="/VerifyEmail" element={<VerifyEmail />}></Route>
        </Routes>
        
    </BrowserRouter>      
    </>
  )
}

export default App