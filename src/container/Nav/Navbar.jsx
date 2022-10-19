import React from 'react'
import "./navbar.css"
import location from "../images/locationmark.svg"
import search from "../images/search.svg"
import cart from "../images/cart.svg"
import { FaBars } from "react-icons/fa";
import { AiOutlineCloseCircle} from "react-icons/ai";
import logins from "../images/logins.svg"
import logo from "../images/logo.svg"

const Navbar = () => {
  function open(){
   document.getElementById("burgarMain").style.display="none";
    document.getElementById("burgarMain-cl").style.display="block";
    document.getElementById("burgar-list").style.display="block";
 }
 function closeMe(){
  document.getElementById("burgarMain").style.display="block";
   document.getElementById("burgarMain-cl").style.display="none";
   document.getElementById("burgar-list").style.display="none";
 }
  return (
    <>
      <div className="logo">
        
        <img src={logo} alt="Rentkar" />
      </div>
      <div className="state">
        <div className="stateMain">
          <img src={location} alt="Icon" />
          <p>Mumbai</p>
        </div>
      </div>
      <div className="searchBar">
        <input type="search" placeholder="Search Here....." id="Search" />
        <button><img src={search}  alt="" /></button>
      </div>
      <div className="cart">
        <div className="cartMain">
          <img src={cart} alt="Icon" />
          <p>My Cart</p>
        </div></div>
      <div className="login">
        <p>Login/Singn UP</p>
      </div>
      <div className="burgar"><FaBars id="burgarMain" onClick={open}/><AiOutlineCloseCircle id="burgarMain-cl" onClick={closeMe}/></div>
      <div id='burgar-list'>
        <ul>
          <li>List Items</li>
          <li>How Renting Works</li>
          <li>Rentkar For business</li>
          <li>Renker For Event</li>
          <li>Invest In Ecosystem</li>
        </ul>
      </div>
    </>
  )
}

export default Navbar