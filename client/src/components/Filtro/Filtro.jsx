import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFiltered } from '../../Redux/Actions';
import { StyledFiltro } from './StyledFiltro';
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';


const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
}

function Filtro({ setShowNoResult, arrayTemps, setArrayTemps, handleClick }) {
    const [temps, setTemps] = useState([]); //[{id: name:}]
    const [selectedTemp, setSelectedTemp] = useState('');

    const breeds = useSelector(state => state.breedsLoaded);
    const dispatch = useDispatch();



    useEffect(() => {
        async function getTemps() {
            let t = (await axios.get('http://localhost:3001/temperament')).data.map(temp => temp.name);
            setTemps(t)
        }
        getTemps();

    }, [])


    const handleChangeTemp = (ev) => {

        setSelectedTemp(
            ev.target.value
        );

        if (ev.target.value) {

            if (!arrayTemps.includes(ev.target.value)) {
                setArrayTemps(
                    [...arrayTemps, ev.target.value] // ["Alert", "Curious"]
                )
            }
        }

    };



    useEffect(() => {


        let filtered = [];
        setShowNoResult(false);

        if (arrayTemps.length === 0) {
            // filtered = breeds;
            dispatch(setFiltered([]));
            return
        }


        breeds.forEach((b) => {
            let temps = b.temperaments?.map(t => t.name); // ["curious", "active"]
            for (let i = 0; i < arrayTemps.length; i++) {
                if (!temps.includes(arrayTemps[i])) {
                    return
                }
            }
            filtered.push(b);
        })

        if (filtered.length === 0) {
            setShowNoResult(true);
        }

        dispatch(setFiltered(filtered));
    }, [arrayTemps, setShowNoResult, breeds, dispatch])


    const deleteTemp = (name) => {
        setArrayTemps(arrayTemps.filter(temp => temp !== name));
    }



    return (
        <StyledFiltro>

            <h1>Filter</h1>

            <div className='filter-container'>
                <select onChange={handleChangeTemp} name="temperaments" value={selectedTemp}  >
                    <option value=''>Select temperaments</option>
                    {
                        temps.map((t, index) => (

                            <option value={t} key={t + index}>{t}</option>
                        ))
                    }
                </select>
                <div className='temp-container'>

                    <AnimatePresence>
                        {
                            arrayTemps.map((t) => (

                                <motion.p
                                    key={t}
                                    initial="hidden"
                                    animate="visible"
                                    variants={variants}
                                    transition={{ duration: 0.3 }}
                                    exit={{ opacity: 0, x: -100 }}
                                >
                                    {t} <button onClick={() => deleteTemp(t)}><i className="fas fa-times"></i></button>
                                </motion.p>


                            ))
                        }
                    </AnimatePresence>
                </div>

                <button className='filter-button' onClick={(ev) => handleClick(ev, 'empty')}>Clear filters</button>


            </div>
        </StyledFiltro >
    )
}


export default Filtro;