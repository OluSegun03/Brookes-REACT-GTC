import React from 'react';
import './App.css';
import image from "./assets/Frame 1618868121.jpg";
import googlee from "./assets/downloa1d.png";
import twitterr from "./assets/download.png";
import "./LandingPage";
import { NavLink } from 'react-router-dom';

// import image2 from "./assets/Frame 1618868120.png";

function App() {
  return (
    <div className='container' >
      <div className='pic'>
        <img className="woman" src={image} alt='image' />
      </div>
      <div className='name'>
        <p className='signUp'>Sign Up</p>
        <NavLink to={'/wishlist'}>
          <button style={{ padding: '0', background: 'none', border: 'none', cursor: 'pointer' }}>
            <p className='accTxt'>You have an account already? <p style={{ color: "green", display: "inline", fontWeight: "600" }}>Login</p></p>
          </button>
        </NavLink>
        {/* use inline to make the login ont the same line as the previous txt */}
        <p style={{ fontWeight: "500", fontSize: "14px" }}>Phone Number</p>
        <div className='phoneNo'></div>
        <div className='proceed'><p style={{ color: "white", marginLeft: "190px" }}>Proceed</p></div>
        <div className='last'>
          <label style={{ display: 'flex' }}>
            <input type='checkbox' style={{ width: "18px", height: "18px", marginTop: "18px" }} />
            <p>I Agree to the <p style={{ color: 'green', display: 'inline' }}>Terms</p> and <p style={{ color: 'green', display: 'inline' }}>conditions</p></p></label>
          <div className='divider-container'>
            <hr className='divider-line' />
            <span className='divider-text'>Or</span>
            <hr className='divider-line' />
          </div>

        </div>
        <div style={{ display: "flex" }}>
          <div className='google' style={{ display: "flex" }}>
            <img src={googlee} style={{ marginLeft: "50px", height: "40px", marginTop: "10px" }} />
            <p style={{ fontSize: "16px", marginLeft: "8px" }}>Google</p>
          </div>
          <div className='twitter' style={{ display: "flex" }}>
            <img src={twitterr} style={{ marginLeft: "50px", height: "30px", marginTop: "15px" }} />
            <p style={{ fontSize: "16px", marginLeft: '8px' }}>Twitter</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;