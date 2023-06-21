import React, {useState} from 'react'
import Logo from "../assets/pizzaLogo.png"
import {Link}  from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/navbar.css"

function Navbar () {

  const [openLinks, setOpenLinks] = useState(false)

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }
  return (
    <div className="navbar">
        <div className="left" id={openLinks ? "open" : "close"}>
            <img src={Logo} />
            <div className="hiddenLinks">
            <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About Us</Link>
          <Link to="/contact"> Contacts </Link>
            </div>
        </div>
        <div className="right">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About Us</Link>
          <Link to="/contact"> Contacts </Link>
          <button onClick={toggleNavbar}>
          <ReorderIcon/>
          </button>
        </div>
    </div>
  )
}

export default Navbar