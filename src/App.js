import React from 'react'
import { ReactDOM } from 'react'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Navbar from './components/Common/Navbar'
import Login from './pages/Login'
import Instructorlogin from './pages/Instructorlogin'
import VerifyEmail from './pages/VerifyEmail'

import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <VerifyEmail />
    </>
  )
}

export default App