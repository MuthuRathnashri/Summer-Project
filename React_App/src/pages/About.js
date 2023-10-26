import React from 'react';
import { Link } from 'react-router-dom';
import MultiplePolygon from "../assets/MultiplePolygon.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${MultiplePolygon})` }}>
      </div>
      <div className="aboutBottom">
        <div className="aboutTopic">About us</div>
        <p>
          Learn more about our mission, values, and the dedicated team behind "Smarter Farming with Field Zoning." Get to know us better.
        </p>
        
        {/* Learn More Button */}
        <div className="learnMoreButton">
          <Link to="/learn-more" className="button">Learn More</Link>
        </div>

      </div>
    </div>
  );
}

export default About;
