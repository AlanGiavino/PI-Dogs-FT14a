import React from 'react';
import { StyledBuscador } from './StyledBuscador';
import { connect } from 'react-redux';
import { getBreeds, setLoading } from '../../Redux/Actions';

function Buscador({ setTitle, title }) {


    function handleChange(event) {
        setTitle(event.target.value);
    }
    async function handleSubmit(event) {
        event.preventDefault();
        

    }

    return (
        <StyledBuscador>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    id="title"
                    autoComplete="off"
                    onChange={(e) => handleChange(e)}
                    placeholder='Search breed'
                    value={title}
                />

            </form>
        </StyledBuscador>
    )

}

function mapStateToProps(state) {
    return {
        breeds: state.breedsLoaded
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getBreeds: name => dispatch(getBreeds(name)),
        setLoading: boolean => dispatch(setLoading(boolean)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);