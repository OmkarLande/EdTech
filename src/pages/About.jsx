import React from 'react'
import '../components/styles/About.css'
import abt1 from '../assests/images/Frame 37.png'
import abt2 from '../assests/images/Frame 46.png'
import abt3 from '../assests/images/Frame 47.png'

function About() {
  return (
    <>
        <div className="c1">
            <p>We envision a world where <b> anyone,<br /> anywhere</b> has the power to <b>transform their <br />lives through learing.</b> </p>
            <ul className='img-list-1'>
                <li><img src={abt1} alt="" /></li>
                <li><img src={abt2} alt="" /></li>
                <li><img src={abt3} alt="" /></li>
                
            </ul>
        </div>
        <div className="moto">
            <ul>
                <li>
                    <h3><b>Improving Lives Through Learning</b></h3>
                    <p>Whether you want to learn or to share what you know, you’ve come to the right place. As a<br /> global destination for online learning, we connect people through knowledge.</p>
                </li>
                <li>
                    <ul className='visions'>
                        <li><div className="our-vision">
                            <h2>Our Vision</h2>
                            <p>With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>
                            </div></li>

                        <li><div className="our-mission">
                            <h2>Our Vision</h2>
                            <p>our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p></div></li>
                    </ul>
                </li>
            </ul>
        </div>
    </>
  )
}

export default About