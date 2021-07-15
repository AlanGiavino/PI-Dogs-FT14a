import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBreedDetail } from '../../Redux/Actions';
import { StyledBreedDetail } from './StyledBreedDetail';

function BreedDetail({ match }) {

    const details = useSelector(state => state.breedDetail);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBreedDetail(match.params.breedId));
    }, [dispatch, match.params.breedId]);

    return (
        <StyledBreedDetail>
            <h1>{details.name}</h1>
            <img className='img' src={details.img?.url} alt="" />

            <div>
                <p>height: {details.height?.metric ? details.height.metric : details.height}</p>
                <p>weight: {details.weight?.metric ? details.weight.metric : details.weight}</p>
                <p>life span: {details.life_span}</p>
                <img src={details.image} alt="" />
                {

                    details.temperaments?.map(t => <span key={t.id}>{t.name}</span>)
                }
            </div>
        </StyledBreedDetail>
    )

}


export default BreedDetail;