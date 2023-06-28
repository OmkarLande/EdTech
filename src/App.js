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


function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Instructorlogin" element={<Instructorlogin />}></Route>
          <Route path="/Resetpassword" element={<Resetpassword />}></Route>
          <Route path="/Verifyemail" element={<Verifyemail />}></Route>
          <Route path="/Createpassword" element={<Createpassword />}></Route>
          <Route path="/Reset" element={<Reset />}></Route>
          <Route path="/MyCourses" element={<MyCourses />}></Route>
          <Route path="/CourseInfo" element={<CourseInfo />}></Route>
          <Route path="/CourseBuilder" element={<CourseBuilder />}></Route>
          <Route path="/Addpages" element={<AddPages />}></Route>
          <Route path="/Publish" element={<Publish />}></Route>
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App