import React from 'react'
import '../components/styles/VerifyEmail.css'

function VerifyEmail() {
    const handleChange = (e) => {}
  return (
    <>
        <div className="verify">
            <h1>Verify Email</h1>
            <p>A verification code has been sent</p>
            <p>to you. Enter the code below</p>
            <div className="otp-arr">
                <input type="text" name="" id="1" onChange={handleChange}/>
                <input type="text" name="" id="2" onChange={handleChange}/>
                <input type="text" name="" id="3" onChange={handleChange}/>
                <input type="text" name="" id="4" onChange={handleChange}/>
                <input type="text" name="" id="5" onChange={handleChange}/>
                <input type="text" name="" id="6" onChange={handleChange}/>
            </div>
            
            <button>Verify and Register</button>
            <p>back to login</p>
            
        </div>
    </>
  )
}

export default VerifyEmail