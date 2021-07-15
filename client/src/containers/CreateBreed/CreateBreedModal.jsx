import React from 'react';
import { StyledCreateBreedModal, StyledOverlay } from './StyledCreateBreedModal'
import { AnimatePresence } from "framer-motion";

const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

export default function CreateBreedModal({ showModal, setShowModal }) {

    return (
        <AnimatePresence>
            {
                showModal.created &&
                <StyledOverlay onClick={() => setShowModal({ ...showModal, created: false })}>

                    <StyledCreateBreedModal
                        onClick={(ev) => {
                            ev.stopPropagation();
                        }}
                        variants={variants}
                        initial={"hidden"}
                        animate={"visible"}
                        exit={"hidden"}
                        transition={{ duration: 0.2 }}
                    >
                        <div className='overlay'>
                            <h1><i class="far fa-check-circle"></i></h1>
                            <p>Breed created successfully</p>

                            <button onClick={() => setShowModal({ ...showModal, created: false })}>Ok</button>
                        </div>
                    </StyledCreateBreedModal>
                </StyledOverlay>

            }
            {
                showModal.temp &&
                <StyledOverlay onClick={() => setShowModal({ ...showModal, temp: false })}>

                    <StyledCreateBreedModal
                        onClick={(ev) => {
                            ev.stopPropagation();
                        }}
                        variants={variants}
                        initial={"hidden"}
                        animate={"visible"}
                        exit={"hidden"}
                        transition={{ duration: 0.2 }}
                    >
                        <div className='overlay'>
                            <h1><span><i class="fas fa-exclamation"></i></span></h1>
                            <p>You must select at least one temperament.</p>

                            <button onClick={() => setShowModal({ ...showModal, temp: false })}>Ok</button>
                        </div>
                    </StyledCreateBreedModal>
                </StyledOverlay>
            }
        </AnimatePresence >
    )
}