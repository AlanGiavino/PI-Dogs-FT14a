import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledCard = styled(motion.div)`
    margin: 30px;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    width: 505px;
    height: 250px;
    background-color: yellow;
    box-shadow: 5px 5px 20px rgba(0, 0, 0,#fdff00);
    cursor: pointer;
    transition: transform 250ms ease;
    &:hover{
        transform: scale(1.02);
    }

    .contImg{
        width: 50%;
        height: 100%;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .info{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 20px;
        width: 50%;
        height: 100%;
       
        h2{
            font-size: 30px;
        }
        
        .temp-container{
                h5{
                    font-size: 20px;
                }
                margin: 0 auto;
                .temperaments{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;

                    .temp{
                        margin-right: 10px;
                    }
                }
            }
    }

    @media (max-width: 650px) {
        flex-direction: column;
        width: 100%;
        height: 520px;
        margin: 30px 0;
        .contImg {
          width: 100%;
          max-height: 50%;
        }
        .info{
            padding: 0 15px;
            width: 100%;
            h2{
                font-size: 30px;
            }
            h5{
                font-size: 17px;
            }
            p{
                font-size: 19px;
            }        
        }
        
    }

    
`