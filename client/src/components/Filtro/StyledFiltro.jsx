import styled from 'styled-components';

export const StyledFiltro = styled.div`

    margin-top: 20px;
    /* background-color: var(--color); */
    background-color: white;
    border: 2px solid var(--color);
    border-radius: 5px;
    padding: 20px;
    /* position: fixed; */
    /* top: 400px; */
    .filter-container{
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        /* align-items: center; */
        margin: auto;
        width: 90%;

        .filter-button{
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

        select{
            padding: 5px 10px;
            margin: 5px;
            outline: none;
            font-size: 15px;
            border-radius: 10px;
            border: 1px solid var(--color);
        }

        .temp-container{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;

            p{
                margin: 5px;
                background-color: var(--color);
                color: black;
                padding: 4px 12px;
                border-radius: 10px;
                font-size: 15px;
                button{
                    margin-left: 5px;
                    background-color: transparent;
                    border: 0;
                    padding: 0;
                    cursor: pointer;
                    transition: color 0.2s ease;

                    &:hover{
                        color: red;
                    }
                }   
            }

        }
       
    }

    h1{
        margin-bottom: 15px;        
    }
  
   
`