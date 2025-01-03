import React,{useState} from "react";
import { Link } from "react-router-dom"
import '../Navbar.css'
import logo from '../assets/openlake_logo.png'
import burger_menu from "../assets/Burger-menu.png"
import * as imIcons from 'react-icons/im'
import * as bsIcons from 'react-icons/bs'

export default function Navbar(){

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return(
    <div>
      <div className="nav">
        <div className="nav_title">
            <a><img  className="nav_logo" src={logo} /></a>
            <Link to="/" className="openlake">OpenLake</Link>
        </div>
        <div className="nav_buttons">
          <Link to="/projects/Activity-Tracker" className="projects">Projects</Link>
          <Link to="https://opensarasu-blogs.vercel.app/" className="blog">Blog</Link>
          <Link to="/programs" className="prog">Programs</Link>
          <Link to="/community" className="community">Community</Link>
        </div>
        <div className="hamburger">
          <img src={burger_menu} onClick={() => setIsMenuOpen(!isMenuOpen)} /> 
        </div>
      </div>
      { isMenuOpen && <div className="mobile_nav">
        <bsIcons.BsXSquare className='close_button' onClick={() => {setIsMenuOpen(!isMenuOpen)}} />
        <Link to="/projects/Activity-Tracker" className="projects1">Projects</Link>
        <Link to="https://opensarasu-blogs.vercel.app/" className="blog1">Blog</Link>
        {/* <Link to="/programs" className="prog1">Programs</Link> */}
        <Link to="/community" className="community1">Community</Link>
        <a gref="https://www.linkedin.com/company/openlake/?originalSubdomain=in" > <imIcons.ImLinkedin className="linkedin1" /> </a>
        <a href="https://github.com/OpenLake" > <bsIcons.BsGithub className="github1" /> </a>
        < a href="https://www.instagram.com/openlake_iitbhilai/" > <bsIcons.BsInstagram className="instagram1"/></a>
      </div> }
      </div>
  )
}
