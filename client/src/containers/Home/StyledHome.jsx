import styled from 'styled-components';

export const StyledHome = styled.div`
    padding-top: 100px;

    .loading{
        margin-top: 40px;
            i{
                font-size: 40px;

            }
    }

    .results{
        margin: 10px;
        color: yellow;
        font-weight: bold;
        i{
            margin-right: 5px;
            /* color: black; */
            display: block;
        }
    }

    .container{
        display: flex;
        margin-top: 25px;
    }

    .filtro{
        width: 20%;
        position: fixed;
    }

    .cards{
        width: 80%;
        padding-top: 20px;
        margin-left: 20%;
    }    

    .cards-container{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        /* padding: 40px; */
        /* margin-top: 80px; */
    }

    .paginationButtons{
        list-style: none;
        display: flex;
        justify-content: center; 
        align-items: center;
        flex-wrap: wrap;
        
        margin-bottom: 30px;
        padding: 20px;

        a{
            display: inline-block;
            padding: 10px;
            margin: 10px 8px;
            border-radius: 10px;
            border: 1px solid black;
            color: black;
            cursor: pointer;
        }

        & a:hover{
            background-color: yellow;
        }

    }

    .paginationActive{
        a{
        background-color: yellow;
        }
    }

    .not-found{
        background-color: black;
        max-width: 500px;
        width: 90%;
        border-radius: 10px;
        padding: 20px;
        border: 2px solid var(--color);
        margin: 20px auto;

        h1{
            margin-top: 10px;
            margin-bottom: 5px;
        }
        i{
            font-size: 45px;
            color: var(--color);
        }
        p{
            margin-bottom: 15px;
        }

        button{
            color: var(--color);
            background-color: #333;
            border: none;
            padding: 10px;
            border-radius: 5px;
            transition: background-color 200ms ease;
            margin-top: 5px;
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

@media (max-width: 900px){
    .container{
        margin-top: 70px;
    }

    .filtro{
        width: 30%;
    }

    .cards{
        width: 70%;
        margin-left: 30%;
    } 
}

@media (max-width: 770px){

    .container{
        flex-direction: column;
    }

    .filtro{
        max-width: 500px;
        width: 90%;
        position: unset;
        margin: auto;
    }

    .cards{
        width: 90%;
        margin: auto;
    }
}

@media (max-width: 770px){
    .paginationButtons{
    }

}
`