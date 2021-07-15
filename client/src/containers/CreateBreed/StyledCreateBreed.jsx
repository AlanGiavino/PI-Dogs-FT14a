import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledCreateBreed = styled(motion.div)`
    margin: 125px auto 30px;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    min-height: 650px;
    width: 90%;
    border-radius: 20px;
    /* overflow: hidden; */
    /* border: 1px solid rgba(0, 0, 0, 0.5); */
    border: 2px solid var(--color);

    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);

    .form{
        width: 50%;
        margin-right: 10px;

        .form-top{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin: 20px 0 0;

            input {
                font-size: 15px;
                margin-bottom: 20px; 
                padding: 8px 10px;
                border-radius: 10px;
                border: 1px solid black;
                outline: none;
                width: 70%;
                }

            select{
                padding: 10px;
                border-radius: 10px;
                outline: none;
                font-size: 15px;
                margin-bottom: 20px;
                border: 1px solid black;
                width: 70%;
            }

            .submit{
                color: var(--color);
                background-color: #333;
                border: none;
                padding: 10px 15px;
                border-radius: 5px;
                transition: background-color 300ms ease, font-weight 300ms ease;;
                outline: none;
                cursor: pointer;
                
                &:hover{
                    font-weight: bold;
                    background-color: black;
                }
            }
            .submit:active{
                transform: scale(0.95);
            }
        }

        .form-bottom{
            margin-bottom: 20px;
            select{
            margin-right: 10px;
            }
        }

        .temp-container{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 15px;
            p {
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

@media (max-width: 900px){
    margin: 200px auto 30px;
}

@media (max-width: 650px){
    flex-direction: center;

    .form{
        width: 100%;
    }
    .form{
        margin: 10px 0 0;

        .form-top{
            input, select{
                width: 100%;
            }
        }
    }
}

    
`