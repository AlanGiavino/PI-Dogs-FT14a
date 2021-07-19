import React from 'react';
import { StyledNav } from './StyledNav.jsx';
import { NavLink } from 'react-router-dom';
import Logo from '../Navbar/doglogo.png';

export default function Navbar() {
    return (
        <StyledNav>
            <div className='container'>
                <ul className='logo'> <img src={Logo} /></ul>
                <ul className='title'>PI-Dogs</ul>
                    <ul className="list">
                        <li className="list-item">
                            <NavLink exact to="/home" >Home</NavLink>
                        </li>
                        <li className="list-item">
                            <NavLink exact to="/createBreed" >Create breed</NavLink>
                        </li>
                        <li className="list-item">
                            <NavLink exact to="/about" >About</NavLink>
                        </li>
                    </ul>
            </div>
        </StyledNav>
    )
}

{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}