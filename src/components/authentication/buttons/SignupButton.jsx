// react
import React, { useState } from 'react';

// modal
import SignupModal from '../modals/SignupModal';

const SignupButton = () => {
  // modal state
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal} className='btn btn-primary'>
        Signup
      </button>
      <SignupModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default SignupButton;
