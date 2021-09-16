import React from 'react';
import { StyledNav } from './StyledNav.jsx';
import { NavLink } from 'react-router-dom';
import Logo from '../Navbar/doglogo.png';

export default function Navbar() {
    return (
        <StyledNav>
            <div className='container'>
                <ul className='logo'>
                <NavLink exact to="/" > <img src={Logo} /></NavLink>
                </ul>
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