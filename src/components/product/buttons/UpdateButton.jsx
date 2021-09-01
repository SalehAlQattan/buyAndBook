// react
import React, { useState } from 'react';

// modal
import UpdateModal from '../modals/UpdateModal';

const UpdateButton = ({ foundProduct }) => {
  // modal state
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button className='btn btn-warning' onClick={openModal}>
        UPDATE
      </button>
      <UpdateModal
        foundProduct={foundProduct}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default UpdateButton;
