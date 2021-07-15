import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ordenar } from '../../Redux/Actions/index';
import { StyledOrdenador } from './StyledOrdenador';




export default function Ordenador() {

    const [selectedOrd, setSelectedOrd] = useState('asc');
    const [selectedCat, setSelectedCat] = useState('name')

    const dispatch = useDispatch();

    function handleChange(ev) {
        if (ev.target.value === 'name' || ev.target.value === 'weight') {
            setSelectedCat(ev.target.value);
        } else {

            setSelectedOrd(ev.target.value);
        }
    }

    function handlesubmit(ev) {
        ev.preventDefault();

        dispatch(ordenar(selectedOrd, selectedCat));

    }
    return (
        <StyledOrdenador onSubmit={handlesubmit}>
            <h1>Sort by</h1>
            <div>

                <select onChange={handleChange} value={selectedCat} name="order" >
                    <option value='name'>Name</option>
                    <option value='weight'>Weight</option>
                </select>

                <select onChange={handleChange} name="by" value={selectedOrd} >
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>
                </select>
                <button type='submit'>Sort</button>
            </div>

        </StyledOrdenador>
    )
}