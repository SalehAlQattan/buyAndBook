// react
import React, { useState } from 'react';

// library
import Modal from 'react-modal';

// stores
import authStore from '../../../stores/authStore';

const SigninModal = ({ isOpen, closeModal }) => {
  // user state
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signin(user);
    closeModal();
  };

  // modal style
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <Modal
      contentLabel='Signup Modal'
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <h2 className='text-center'>Signin</h2>
          <label htmlFor='usernameInput' className='form-label'>
            Username
          </label>
          <input
            onChange={handleChange}
            placeholder='username'
            name='username'
            type='text'
            className='form-control'
            id='usernameInput'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='passwordInput' className='form-label'>
            Password
          </label>
          <input
            onChange={handleChange}
            placeholder='password'
            name='password'
            type='password'
            className='form-control'
            id='passwordInput'
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default SigninModal;
