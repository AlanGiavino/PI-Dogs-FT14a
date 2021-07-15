import styled from 'styled-components';
import { motion } from "framer-motion";

export const StyledCreateBreedModal = styled(motion.div)`
    background-color: white;
    border-radius: 10px;
    border: 2px solid black;
    padding: 20px;
    max-width: 400px;
    width: 90%;

    .overlay{
        h1{
            margin-bottom: 10px;
        }

        p{
            margin-bottom: 15px;
        }

        button{
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
            &:active{
                transform: scale(0.95);
            }
        }

        span{
            border: 3px solid black;
            border-radius: 100px;
            padding: 0 10px;
            font-size: 20px;
        }

        .far{
            font-size: 35px;
        }
    }
`

export const StyledOverlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: rgba(255, 255, 255, 0.2); */
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9999;
    backdrop-filter: blur(2px);
`