import React from 'react';
import { Link } from 'react-router-dom';
import BannnerTmage from "../assets/Field_Farm.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannnerTmage})`}}>
        <div className="headerContainer" >
            <h1>Smarter Farming with Field Zoning</h1><br />
            <h2>Welcome to the Future of Agriculture!</h2>
            <h2>Empowering Farmers, Maximizing Yields</h2>
            <p>Are you ready to revolutionize your farming practices and take your agricultural productivity to new heights? Discover the power of "Smarter Farming with Field Zoning," where cutting-edge technology and precision techniques come together to redefine how you cultivate the land.
</p><br/>
            <Link to="/qgis-resources">
              <button>Get Started</button><br/>
            </Link >
        </div>
    </div>
  )
}

export default Home
