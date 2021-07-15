import styled from 'styled-components';

export const StyledOrdenador = styled.form`
    background-color: white;
    border-radius: 5px;
    padding: 20px;
    border: 2px solid var(--color);
    
    div{
        display: flex;
        flex-direction: column;
        margin: auto;
        width: 90%;

        select{
            padding: 5px 10px;
            margin: 5px;
            outline: none;
            font-size: 15px;
            border-radius: 10px;
            border: 1px solid var(--color);
        }

        button{
            color: var(--color);
            background-color: #333;
            border: none;
            padding: 10px;
            border-radius: 5px;
            transition: background-color 200ms ease;
            margin-top: 20px;
            font-size: 15px;
            &:hover{
                font-weight: bold;
                background-color: black;
            }
            &:active{
                transform: scale(0.95);
            }
        }
    }

    h1{
        margin-bottom: 15px;
    }
    
`