import styled from 'styled-components';

export const StyledLanding = styled.div`
    background-color: black;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;    
    position: relative;

    .container{
        position: absolute;
        top: 45%;
        left: 500px;
        padding: 0 30px;
        transform: translateY(-50%);
        text-shadow: 0px 0px 10px black, 0px 0px 50px black;
    }
    a{
        color: yellow;
        font-size: 20px;
        text-decoration: none;
        border: 3px solid yellow;
        padding: 10px 35px;
        transition: background-color 200ms ease;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);

        &:hover{
            background-color: yellow;
            color: black;
        text-shadow: none;

        }
    }
    h1{
        color: yellow;
        margin-bottom: 40px;
        text-align: center;
        font-size: 60px;
        line-height: 1.2;
    }

   
`