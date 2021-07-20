  
import React, { useEffect, useState } from 'react';
import { StyledCreateBreed } from './StyledCreateBreed';
import { useDispatch } from "react-redux";
import { getBreeds } from '../../Redux/Actions/index';
import axios from '../../axios';
import CreateBreedModal from './CreateBreedModal';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

function CreateBreed() {

    const dispatch = useDispatch();

    const [temps, setTemps] = useState([]); // temps = [{id:1, name: 'Alert'},{},{}]
    const [selectedTemp, setSelectedTemp] = useState('');
    const [input, setInput] = useState({

        temperaments: [],
        name: '',
        weight: '',
        height: '',
        life_span: '',
        image: 'https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    });
    const [showModal, setShowModal] = useState({ created: false, temp: false });


    useEffect(() => {
        async function getTemps() {
            let t = (await axios.get('/temperament')).data;
            setTemps(t);
        }
        getTemps();
    }, [])

    const handleChange = (ev) => {

        setInput({
            ...input,
            [ev.target.name]: ev.target.value,
        });
    };
    const handleSubmit = (ev) => {
        ev.preventDefault();

        axios.post("/dog", input).then((res) => {
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

    const handleChangeTemp = (ev) => {

        setSelectedTemp(
            ev.target.value
        );

        if (ev.target.value) {

            if (!input.temperaments.includes(ev.target.value)) {
                setInput({
                    ...input,
                    temperaments: [...input.temperaments, ev.target.value]
                })
            }
        }

    };

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

                    <select onChange={handleChangeTemp} name="temperaments" value={selectedTemp}  >
                        <option value=''>Select temperaments</option>
                        {
                            temps.map((t) => (
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
            <div className='img-container' />
        </StyledCreateBreed>
    )

}

export default CreateBreed;