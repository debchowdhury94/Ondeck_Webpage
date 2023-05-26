import React from "react";
import "../styles/Home.css";
import "../styles/NavBar.css";
import IMAGES from "../Images";

export default function Home() {
  return (
    <div className="Home">
      <div className="middleRow">
        <div className="leftColumn">
          <div className="mainHeader">
            <span className="first_half">Ondeck is your remote</span>
            <span className="second_half">conference calling tool</span>
          </div>
          <p className="details">
            Ondeck is service that allows you to create beautiful, online, and
            encrypted video calls for you and your remote team.
          </p>
          <button className="tryForFree">Try for free</button>
          <div className="ratings">
            <span>5.0 Rating based on reviews from:</span>
            <img src={IMAGES.capterraLogo} alt="" className="reviewIcons" />
            <img src={IMAGES.alternativeTo} alt="" className="reviewIcons" />
          </div>
        </div>
        <div className="rightColumn">
          <img src={IMAGES.heroImage} alt="" id="hero" />
        </div>
      </div>
      <div className="footerColumn">
        <span>Trusted by 3+ million people at companies like:</span>
        <div className="footer">
          <img src={IMAGES.netflixLogo} alt="" className="footerIcons" />
          <img src={IMAGES.shopifyLogo} alt="" className="footerIcons" />
          <img src={IMAGES.spotifyLogo} alt="" className="footerIcons" />
          <img src={IMAGES.walmartLogo} alt="" className="footerIcons" />
        </div>
      </div>
    </div>
  );
}
