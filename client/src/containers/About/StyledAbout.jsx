import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledAbout = styled(motion.div)`
    margin: 125px auto 30px;
    padding: 25px;
    max-width: 800px;
    width: 90%;
    border-radius: 10px;
    box-shadow: 5px 5px 20px rgba(0,0,0,0.5);
    background-color: yellow;
    color: black;

    .about{
        h1{
            margin-bottom: 10px;
            color: black;
        }
        a{
            color: black;
            font-weight: bold;
        }

        p:last-child{
            margin-top: 10px;
            color:black;
        }
    }

    .tech-title{
        margin-top: 20px;   
        color:black;
    }

    .tech-container{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        /* margin-top: 10px; */
        margin-bottom: 20px;

        div{
            margin: 20px;
            h1{
                font-size: 15px;
            }
        }

        img{
            width: 45px;
            height: 45px;
        }

    }
}
`