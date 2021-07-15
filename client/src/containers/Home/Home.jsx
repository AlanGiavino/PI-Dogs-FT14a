import React, { useEffect, useState } from 'react';
import { StyledHome } from './StyledHome';
import { useDispatch, useSelector } from "react-redux";
import Card from '../../components/Card/Card';
import Buscador from '../../components/Buscador/Buscador';
import Filtro from '../../components/Filtro/Filtro';
import Ordenador from '../../components/Ordenador/Ordenador';
import ReactPaginate from 'react-paginate'
import Modal from '../../components/Modal/Modal';
import { setFiltered } from '../../Redux/Actions';
import { motion } from 'framer-motion';


const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
}

function Home() {
    const [title, setTitle] = useState('');
    const [showNoResult, setShowNoResult] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showBreed, setShowBreed] = useState({});

    const dispatch = useDispatch();


    const breedsLoaded = useSelector(state => state.breedsLoaded);
    const filteredBreeds = useSelector(state => state.filteredBreeds);
    const loading = useSelector(state => state.loading);

    const [pageNumber, setPageNumber] = useState(0);

    const breedsPerPage = 8;
    const pagesVisited = pageNumber * breedsPerPage;

    const [forcedPage, setForcedPage] = useState(false)

    useEffect(() => {
        if (title !== '') {
            setForcedPage(false);
            setForcedPage(true);
            setPageNumber(0);
        }
    }, [title])

    useEffect(() => {
        setForcedPage(false);
        setForcedPage(true);
        setPageNumber(0);
    }, [filteredBreeds])


    const [arrayTemps, setArrayTemps] = useState([]);

    const handleClick = (ev, empty) => {
        let filtered = [];
        setShowNoResult(false);

        if (arrayTemps.length === 0) {
            dispatch(setFiltered([]));
            return
        }

        if (!empty) {
            breedsLoaded.forEach((b) => {
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

        } else {
            setArrayTemps([]);
        }

        dispatch(setFiltered(filtered)); //[{}, {}] --> action a redux
    }


    function renderCards(array) {

        if (array.length === 0) {
            return
        }
        let filtered = array.filter(b => b.name.toLowerCase().includes(title.toLocaleLowerCase()));

        const displayBreeds = filtered.slice(pagesVisited, pagesVisited + breedsPerPage);

        const pageCount = Math.ceil(filtered.length / breedsPerPage);

        function changePage({ selected }) {
            setPageNumber(selected);
        }
        return (
            <>
                {
                    (title !== '' || filteredBreeds.length) && filtered.length > 0
                        ? <motion.p
                            className='results'
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            transition={{ duration: 0.4 }}
                        >
                            <i class="far fa-hand-point-down"></i>{filtered.length} {filtered.length > 1 ? 'results' : 'result'}
                        </motion.p>
                        : null
                }
                <div className='cards-container'>

                    {
                        displayBreeds.length > 0
                            ?
                            displayBreeds.map((breed) => (
                                <Card key={breed.id} breed={breed} setShowModal={setShowModal} setShowBreed={setShowBreed} />
                            ))
                            :
                            <motion.div
                                className='not-found'
                                initial="hidden"
                                animate="visible"
                                variants={variants}
                                transition={{ duration: 0.4 }}
                                exit={{ opacity: 0 }}
                            >
                                <i class="fas fa-search"></i>
                                <h1>No breeds found</h1>
                                <p>Search for a different breed.</p>
                                <button onClick={(ev) => {
                                    handleClick(ev, 'empty');
                                    setTitle('');
                                }}>Try again</button>
                            </motion.div>
                    }

                </div>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationButtons"}
                    previousLinkClassName={"previousButton"}
                    nextLinkClassName={"nextButton"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                    forcePage={forcedPage ? 0 : null}
                />
            </>
        )
    }
    return (

        <StyledHome>
            <Modal showModal={showModal} setShowModal={setShowModal} breed={showBreed} />
            <div className='container'>
                <motion.div
                    className='filtro'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                >

                    <Ordenador />
                    <Filtro setShowNoResult={setShowNoResult} handleClick={handleClick} setArrayTemps={setArrayTemps} arrayTemps={arrayTemps} />
                </motion.div>

                <div className='cards'>
                    <motion.div
                        className='buscador'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Buscador setTitle={setTitle} title={title} />
                    </motion.div>

                    {

                        loading
                            ? <div className='loading'><i class="fas fa-spin fa-paw"></i> Loading...</div>
                            :
                            showNoResult
                                ?
                                <motion.div
                                    className='not-found'
                                    initial="hidden"
                                    animate="visible"
                                    variants={variants}
                                    transition={{ duration: 0.4 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <i class="fas fa-search"></i>
                                    <h1>No breeds found</h1>
                                    <p>Select another temperament combination.</p>
                                    <button onClick={(ev) => {
                                        setTitle('');
                                        handleClick(ev, 'empty')
                                    }}>Try again</button>
                                </motion.div>
                                :
                                filteredBreeds.length > 0
                                    ? renderCards(filteredBreeds)
                                    : renderCards(breedsLoaded)
                    }
                </div>

            </div>
        </StyledHome>
    )
}

export default Home;