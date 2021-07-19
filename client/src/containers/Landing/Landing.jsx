import React from 'react';
import { StyledLanding } from './StyledLanding';
import { NavLink } from 'react-router-dom';


export default function Landing() {

    return (
        <StyledLanding>
            <div className='container'>
            <img src="https://media.giphy.com/media/Zdg9OUy035bAJhf5wu/giphy.gif" /> 
                <h1>PI-Dogs</h1>
                <NavLink exact to="/home">Enter</NavLink>
            </div>

        </StyledLanding>
    )
}