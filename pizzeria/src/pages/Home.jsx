import React from 'react'
import { Link } from "react-router-dom"
import BannerImage from "../assets/pizza.jpg"
import "../styles/Home.css"


function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})`}}>
      <div className='headerContainer'>
        <h1>Igna's Pizzeria</h1>
        <p>PIZZA TO FIT MY TASTE</p>
        <Link>
        <button>Order Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home