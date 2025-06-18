import React, { useState } from "react";
// import './Modal.css'; // Optional: Import CSS for styling

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <button className='modal-close-button' onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

const MyModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Title</h2>
        <p>This is the modal content.</p>
      </Modal>
    </div>
  );
};

export default MyModal;
