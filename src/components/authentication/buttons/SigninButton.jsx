// react
import React, { useState } from 'react';

// modal
import SigninModal from '../modals/SigninModal';

const SigninButton = () => {
  // modal state
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal} className='btn btn-secondary'>
        Signin
      </button>
      <SigninModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default SigninButton;
