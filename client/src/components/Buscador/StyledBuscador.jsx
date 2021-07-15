import styled from 'styled-components';

export const StyledBuscador = styled.div`
    position: relative;
    margin: auto;
    max-width: 400px;
    width: 90%;
    input{
        font-size: 20px;
        padding: 10px 55px 10px 20px;
        border-radius: 20px;
        outline: 0;
        border: 2px solid yellow;
        width: 100%;

    }
    
    &::after{
        content: '\f002';
        font-family: 'font awesome 5 pro';
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 25px;
        color: var(--color);
    }
    
        
`