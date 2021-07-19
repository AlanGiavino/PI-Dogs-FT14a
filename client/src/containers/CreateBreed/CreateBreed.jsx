import React, { useEffect, useState } from 'react';
import { StyledCreateBreed } from './StyledCreateBreed';
import { useDispatch } from "react-redux";
import { getBreeds } from '../../Redux/Actions/index';
import CreateBreedModal from './CreateBreedModal';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import axios from 'axios';
import { connect } from 'react-redux';

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

function CreateBreed() {

    const dispatch = useDispatch();

    const [temps, setTemps] = useState([]); // temps = [{id:1, name: 'Alert'},{},{}]
    // const [selectedTemp, setSelectedTemp] = useState('');
    const [input, setInput] = useState({

        temperaments: [],
        name: '',
        weight: '',
        height: '',
        life_span: '',
        image: 'https://www.pexels.com/es-es/foto/pit-bull-terrier-americano-marron-y-blanco-con-disfraz-marron-825949/'
    });
    const [showModal, setShowModal] = useState({ created: false, temp: false });

    useEffect(() => {
        async function getTemperaments() {
            let t = (await axios.get('http://localhost:3001/temperament')).data;
            setTemps(t);
        }
        getTemperaments();
    }, [])

    const handleChange = (e) => {

        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/dogs', input).then((res) => {
            if (res.status === 200) {
                setShowModal({
                    ...showModal,
                    created: true
                })
                dispatch(getBreeds())
                setInput({
                    name: '',
                    weight: '',
                    height: '',
                    life_span: '',
                    temperaments: []
                });
            }
        })
            .catch(() => {
                setShowModal({
                    ...showModal,
                    temp: true
                })
            })
    };

    const handleChangeTemp = (e) => {

        // setSelectedTemp(
        //     e.target.value
        // );

        // if (e.target.value) {

        //     if (!input.temperaments.includes(e.target.value)) {
                setInput({
                    ...input,
                    temperaments: [...input.temperaments, e.target.value]
                })
            }
        // }

    // };

    function getNames(arr) {
        let names = [];
        temps.forEach((t) => {
            arr.forEach((id) => {
                if (parseInt(id) === t.id) {
                    names.push({ id: t.id, name: t.name })
                }
            })

        })
        return names;
    }
    const deleteTemp = (id) => {
        setInput({
            ...input,
            temperaments: input.temperaments.filter(temp => parseInt(temp) !== id)
        })

    }
    return (

        <StyledCreateBreed
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.4 }}
        >
            <CreateBreedModal setShowModal={setShowModal} showModal={showModal} />
            <div className='form'>

                <h1>Create Breed</h1>
                <form className='form-top' id='form-top' onSubmit={handleSubmit}>

                    <input
                        required
                        name='name'
                        type='text'
                        value={input.name}
                        placeholder='Name'
                        onChange={handleChange}
                    />
                    <input
                        required
                        name='weight'
                        type='number'
                        value={input.weight}
                        placeholder='Weight'
                        onChange={handleChange}
                        min="1"
                    />
                    <input
                        required
                        name='height'
                        type='number'
                        value={input.height}
                        placeholder='Height'
                        onChange={handleChange}
                        min="1"
                    />
                    <input
                        required
                        name='life_span'
                        type='number'
                        value={input.life_span}
                        placeholder='Life span'
                        onChange={handleChange}
                        min="1"
                    />

                    <select onChange={(e) => handleChangeTemp(e)} name="temperaments" value={input.temperament}  >
                        <option value=''>Select temperaments</option>
                        {
                            temps?.map((t) => (
                                <option value={t.id} key={t.id}>{t.name}</option>
                            ))
                        }
                    </select>
                    <div className='temp-container'>
                        <AnimatePresence>
                            {
                                getNames(input.temperaments).map((t) => (
                                    <motion.p
                                        key={t.id}
                                        initial={{ opacity: 0, y: -50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        exit={{ opacity: 0, x: -100 }}
                                    >
                                        {t.name} <button onClick={() => deleteTemp(t.id)}><i className="fas fa-times"></i></button>
                                    </motion.p>
                                ))
                            }
                        </AnimatePresence>
                    </div>

                    <input className='submit' type="submit" value='Create' />

                </form>
            </div>
        </StyledCreateBreed>
    )

    
     

}

// function mapStateToProps(state) {
//     return {
//         temperaments: state.temperaments
//     }
//     }

// function mapDispatchToProps(dispatch){
//         return{
//             temperaments: breed => dispatch (temperaments(breed))
//         }
//     }
// export default connect ( mapStateToProps , mapDispatchToProps)(CreateBreed);
export default CreateBreed;