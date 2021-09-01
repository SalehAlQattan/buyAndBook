// react
import { observer } from 'mobx-react';
import React from 'react';

// router
import { Redirect, useParams } from 'react-router';
import { Link } from 'react-router-dom';

// stores
import productStore from '../../stores/productStore';

// components
import UpdateButton from './buttons/UpdateButton';

const ProductDetails = () => {
  // slug
  const { productSlug } = useParams();

  const foundProduct = productStore.products.find(
    (product) => product.slug === productSlug
  );

  if (!foundProduct) return <Redirect to='/products' />;

  if (productStore.loading) return <h1>loading...</h1>;

  return (
    <div
      className='card'
      style={{
        margin: '0 auto',
        padding: '1rem',
        width: '25rem',
        height: '100%',
      }}
    >
      <img
        src={foundProduct.image}
        className='card-img-top'
        alt={foundProduct.name}
      />
      <div className='card-body'>
        <h5 className='card-title'>{foundProduct.name}</h5>
        <p className='card-text'>{foundProduct.description}</p>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>{foundProduct.price} KD</li>
        <li className='list-group-item'>{foundProduct.quantity} pieces</li>
      </ul>
      <div className='card-body'>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <Link to='/products'>
            <button className='btn btn-primary'>Go Back</button>
          </Link>
          <button
            onClick={() => productStore.deleteProduct(foundProduct.id)}
            className='btn btn-danger'
          >
            DELETE
          </button>
          <UpdateButton foundProduct={foundProduct} />
        </div>
      </div>
    </div>
  );
};

export default observer(ProductDetails);
