import styled from 'styled-components';

export const StyledNav = styled.nav`
width: 100%;
position: fixed;
background-color: black;
top: 0;
z-index: 10;
border-bottom: 2px solid yellow; 

.container{
    margin: auto;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: black;
    padding: 10px;            
        }
    }
}


.title{
    font-weight: bold;
}
.list {
    /* margin: 0;
    padding: 0; */
    list-style: none;
    display: flex;
    align-items: center;
    /* height: 100%; */
}
.list-item {
    margin: 0 5px;
    display: flex;
    /* height: 100%; */
    /* width: auto; */
    align-items: center;
}

.list-item a {
    color: yellow;
    /* height: 100%; */
    padding: 6px 14px;
    margin-top: 5px;
    margin-bottom: 5px;
    text-decoration: none;
    border-radius: 20px;
    transition: background-color 250ms ease;
    font-weight: bold;
    border: 2px solid yellow;
}

.active {
    background-color: black;
}

.list-item a:hover{
    background-color: yellow;
    color: white;
    font-weight: bold;
    /* transform: scale(1.02); */
}

@media (max-width: 900px){
    .container{
        flex-direction: column;
    }
}

@media (max-width: 650px){
    .social-media{
        height: 50px;
        i{
            font-size: 35px;
        }
    }
    .list-item a {
        font-size: 14px;
    }
}
`