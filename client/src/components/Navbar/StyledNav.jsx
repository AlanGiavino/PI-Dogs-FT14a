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

img{
    display: flex;
    align-items: center;
    justify-content: center;  
    text-align: center;
    margin-right: 20px;
    width: 80px;
    height: 80px;
  }

}
.list {
    margin: 0 60px;
    display: flex;
    align-items: left;
}
.list-item {
    margin: 0 5px;
    display: flex;
    align-items: center;
}

.list-item a {
    color: yellow;
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
    color: black;
    font-weight: bold;
    /* transform: scale(1.02); */
}
`