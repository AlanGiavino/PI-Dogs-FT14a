import styled from 'styled-components';
import { motion } from "framer-motion";

export const StyledModal = styled(motion.div)`
    background-color: red;
    max-width: 800px;
    min-height: 500px;
    border-radius: 20px;
    width: 90%;
    background-image: url(${(props) => props.image});
    background-size: cover; 
    display: flex;
    /* overflow: hidden; */
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.5);
    
    .overlay{
        width: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        color: white;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        position: relative;
        border-radius: 20px;

        h1{
            font-size: 60px;
        }

        .info{
            display: flex;
            justify-content: center;

            p{
                margin: 10px 35px;
                font-size: 30px;
                font-weight: bold;
                .fas{
                    margin-right: 15px;
                }
            }

            span{
                font-weight: normal;
                display: block;
            }
        }

        .temperaments{
            .far{
                margin-right: 15px;

            }
            .temp-title{
                font-size: 30px;
                font-weight: bold;
            }
            div{
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                p{
                    margin: 10px;
                    background-color: var(--color3);
                    color: black;
                    padding: 5px 10px;
                    border-radius: 10px;
                    font-size: 20px;

                }
            }
        }

        button{
            i{
                font-size: 25px;
                color: black;
            }
            position: absolute;
            top: -20px;
            right: -20px;
            width: 45px;
            height: 45px;
            border: none;
            border-radius: 50%;
            border: 2px solid black;

            background-color: #ffffff;
            cursor: pointer;
        }
    }

    @media (max-width: 650px) {
        .overlay{
            button{
                top: 10px;
                right: 10px;
                background-color: transparent;
                border: 0;
                i{
                    color: white;

                }
            }

            h1{
            font-size: 45px;
            }
            .info{
                p{
                    margin: 10px 20px;
                    font-size: 24px;
                }

            }
            .temperaments{
                
                .temp-title{
                    font-size: 24px;
                }

                div{
                    
                    p{
                        margin: 5px;
                        font-size: 14px;

                    }
                }
            }
        }
    }

    @media (max-width: 430px) {
        .overlay{
            padding: 15px;
            h1{
                font-size: 35px;
            }

            .info{
                justify-content: space-around;
                p{
                    margin: 5px 15px;
                    font-size: 20px;
                }

            }

            .temperaments{
                
                .temp-title{
                    font-size: 20px;
                }

                div{
                    
                    p{
                        
                        font-size: 14px;

                    }
                }
            }
        }
    }
    
`

export const StyledOverlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9999;
    backdrop-filter: blur(2px);
`