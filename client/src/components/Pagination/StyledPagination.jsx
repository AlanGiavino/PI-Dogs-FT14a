import styled from 'styled-components';

export const StyledPagination = styled.div`
padding-bottom: 50px;

ul{
    display: flex;
    list-style: none;
    justify-content: center;

    a{
        text-decoration: none;
        color: black;
        padding: 10px 15px;
        border-radius: 5px;
    }
    a:hover{
        background-color: var(--color);
    }
}

`