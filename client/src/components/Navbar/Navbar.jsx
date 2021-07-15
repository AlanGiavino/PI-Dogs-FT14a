import React from 'react';
import { StyledNav } from './StyledNav.jsx';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <StyledNav>
            <div className='container'>
                <div className='title'>
                    <p>PI-Dogs</p>
                </div>
                <div>
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
            </div>
        </StyledNav>
    )
}