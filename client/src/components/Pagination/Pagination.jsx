import React from 'react';
import { StyledPagination } from './StyledPagination';

function Pagination({ cardsPerPage, totalCards, paginate }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i);

    }

    return (
        <StyledPagination>

            
                <ul>
                    {pageNumbers.map(number => (
                        <li className='links' key={number}>
                            <a onClick={() => paginate(number)} href="#">{number}</a>
                        </li>
                    ))}
                </ul>
            
        </StyledPagination>
    )
}

export default Pagination;