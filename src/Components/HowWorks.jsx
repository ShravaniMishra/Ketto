import React from 'react'
import styles from "../styles/HowWorks.modules.css";


import Carousel from './Carousal';

const HowWorks = () => {
  return (
    <div>
      <h1 className='sam'>Raising Funds was never this easy. Start a fundraiser in 5 minutes!</h1>
    <div className='cr'><Carousel/></div>
    <div className='cf'>
      <div><img src="https://ketto.gumlet.io/assets/images/how-it-works/ketto-logo.svg?w=480&dpr=1.0"></img></div>
      <h2 className='fon'>We know you are in urgent need of funds.</h2>
      <p>Our personal fundraiser expert is waiting to get you started!</p>
      <form action="/action_page.php">
  <div className="input-container">
    <i className="fa fa-user icon">
    
    </i>
    <input className="input-field" type="text" placeholder="Username" name="usrnm"/>
    <img className='usericon' src="https://cdn-icons-png.flaticon.com/128/847/847969.png"/></div>

  <div className="input-container">
    <i className="fa fa-envelope icon"></i>
    <input className="input-field" type="text" placeholder="Your Mobile Number" name="Mobile"/>
  </div>
  <div className="input-container2">
   
    <input className="input-field" type="text" placeholder="What will be the funds used for?" name="Mobile"/>
  </div>
  <p className='para2'>102 People started a fundraiser in last 2 days</p>
<div><button className='btn1'>GET A CALL</button></div>
  <a href="#" className="twitter-btn">
          <i className="fa fa-twitter fa-fw"></i>CONNECT ON WHATSAPP
        </a>
</form>

    </div>

    </div>
  )
}

export default HowWorks
