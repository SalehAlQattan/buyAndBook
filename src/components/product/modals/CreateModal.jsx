// react
import React, { useState } from 'react';

// modal
import Modal from 'react-modal';

// stores
import productStore from '../../../stores/productStore';

const CreateModal = ({ isOpen, closeModal }) => {
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

  // product state
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    image: '',
  });

  // handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    productStore.createProduct(product);
    closeModal();
  };

  // handle change
  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  // handle image
  const handleImage = (event) => {
    setProduct({ ...product, image: event.target.files[0] });
  };

  return (
    <Modal
      contentLabel='Create Produt Modal'
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='productName' className='form-label'>
            Product Name
          </label>
          <input
            onChange={handleChange}
            placeholder='iPad pro'
            name='name'
            type='text'
            className='form-control'
            id='productName'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='productDescription' className='form-label'>
            Product Description
          </label>
          <textarea
            onChange={handleChange}
            placeholder='12 inch space gray iPad pro'
            className='form-control'
            name='description'
            id='productDescription'
            cols='30'
            rows='5'
          ></textarea>
        </div>
        <div className='mb-3'>
          <label htmlFor='productPrice' className='form-label'>
            Price
          </label>
          <input
            onChange={handleChange}
            placeholder='120 KD'
            name='price'
            type='number'
            className='form-control'
            id='productPrice'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='productQuantity' className='form-label'>
            Quantity
          </label>
          <input
            onChange={handleChange}
            placeholder='100'
            name='quantity'
            type='number'
            className='form-control'
            id='productQuantity'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='productImage' className='form-label'>
            Product image
          </label>
          <input
            name='image'
            type='file'
            className='form-control'
            id='productImage'
            onChange={handleImage}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default CreateModal;
