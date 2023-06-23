import React from 'react'
import { ReactDOM } from 'react'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Navbar from './components/Common/Navbar'
import Login from './pages/Login'
import Instructorlogin from './pages/Instructorlogin'
<<<<<<< HEAD
import VerifyEmail from './pages/VerifyEmail'

=======
import Home from './pages/Home'
>>>>>>> 666be6f286124e307749d4c9d2f04ce1284e9f35

function App() {
  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Instructorlogin" element={<Instructorlogin />}></Route>
        </Routes>
        
    </BrowserRouter>      
    </>
  )
}

export default App