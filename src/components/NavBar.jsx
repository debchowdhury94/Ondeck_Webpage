import React, { useState } from 'react';
import "../styles/NavBar.css";
import IMAGES from "../Images";
import Popup from './Popup';

export default function NavBar() {
  const navLinks = ["Challenges", "Resources", "Other Links"]
  
  const [popTrigger, setPopTrigger] = useState(false);
  
  return (
    <div className="navWrapper">
        <img class="logo" src={IMAGES.onDeckLogo} alt=''/>
        <div className="navLinksContainer">
          <div className="links" onClick={() => setPopTrigger(true)}>Products</div>
          <Popup trigger={popTrigger} setTrigger={setPopTrigger}/>
          {navLinks.map((link) => (
            <div className="links">{link}</div>
          ))}
        </div>
        <diV id="tryFreeContainer">
        <div className="signIn">Sign In</div>
        <button className='tryForFree'>Try for free</button>     
        </diV>
    </div>
  )
}
