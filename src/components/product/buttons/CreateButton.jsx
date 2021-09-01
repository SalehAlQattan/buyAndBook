// react
import React, { useState } from 'react';

// icons
import { IoMdAddCircle } from 'react-icons/io';

// modal
import CreateModal from '../modals/CreateModal';

const CreateButton = () => {
  // modal state
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <IoMdAddCircle onClick={openModal} color='green' size='3rem' />
      <CreateModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default CreateButton;
