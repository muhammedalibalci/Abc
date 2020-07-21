import React from 'react'
import Modal from 'react-modal';

export const AddAddress = ({modalIsOpen,closeModal}) => {
    return (
        <div>
            <Modal
               isOpen={modalIsOpen}
               onRequestClose={closeModal}
               className="modal-content"
               contentLabel="Example Modal"
            >

                <div>I am a modal</div>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
        </div>
    )
}
