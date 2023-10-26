import React, { useState } from "react";
import Logo from "../assets/PolyLogo.jpg";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () =>{
        setOpenLinks(!openLinks);
    };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
            <Link to="/"> Home </Link>
            <Link to="/menu"> Elements </Link>
            <Link to="/about"> About </Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/contact"> Contact </Link>
            <Link to="/updates">Updates</Link>
            <Link to="/services">Services</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/updates">Updates</Link>
        <Link to="/services">Services</Link>
        <button onClick={toggleNavbar}>
            <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar
