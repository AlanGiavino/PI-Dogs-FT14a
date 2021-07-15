import React from 'react';
import { StyledModal, StyledOverlay } from './StyledModal'
import { AnimatePresence } from "framer-motion";

const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

export default function Modal({ showModal, setShowModal, breed }) {

    return (
        <AnimatePresence>
            {
                showModal &&
                <StyledOverlay onClick={() => setShowModal(false)}>

                    <StyledModal
                        onClick={(ev) => {
                            ev.stopPropagation();
                        }}
                        variants={variants}
                        initial={"hidden"}
                        animate={"visible"}
                        exit={"hidden"}
                        transition={{ duration: 0.2 }}
                        image={breed.image}
                    >
                        <div className='overlay'>
                            <h1><i className="fas fa-paw"></i> {breed.name}</h1>
                            <div className='info'>
                                <p><i className="fas fa-balance-scale-right"></i>Weight <span>{breed.weight} kg</span></p>
                                <p><i className="fas fa-arrows-alt-v"></i>Height <span>{breed.height} cm</span></p>
                            </div>
                            <div className='temperaments'>
                                <p className='temp-title'><i className="far fa-heart"></i>Temperaments </p>
                                <div>
                                    {
                                        breed.temperaments && breed.temperaments.map((temp) => <p key={temp.id}>{temp.name}</p>)
                                    }
                                </div>
                            </div>

                            <button onClick={() => setShowModal(false)}><i className="fas fa-times"></i></button>
                        </div>
                    </StyledModal>
                </StyledOverlay>
            }
        </AnimatePresence >
    )
}