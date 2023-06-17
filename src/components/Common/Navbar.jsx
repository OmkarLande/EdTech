import React from "react";
import search from '../../assests/images/search.png'
import cart from '../../assests/images/cart.png'
import signup from '../../assests/images/signup.png'
import "../../components/styles/Navbar.css";

function Navbar() {
  return (
    <>
      <header>
        <div className="advertiesment">
          <p>Advertiesment</p>
        </div>

        <nav>
        <div className="title">
          <h1>SkillHive</h1>
        </div>

        <div className="navigation-menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="">Cataloge v</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="profile">
          <ul>
            <li><a href=""><img src={search} alt="" srcset="" /></a></li>
            <li><a href=""><img src={cart} alt="" /></a></li>
            <li><a href=""><img src={signup} alt="" /></a></li>
          </ul>
        </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
