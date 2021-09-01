// react
import React from 'react';

// mobx
import { observer } from 'mobx-react';

// router
import { Link } from 'react-router-dom';

const productItem = ({ product }) => {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <div className='card-body'>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '200px', height: '200px', objectFit: 'contain' }}
        />
        <h5 className='card-title'>{product.name}</h5>
        <Link to={`/products/${product.slug}`}>
          <p className='btn btn-primary'>More Details</p>
        </Link>
      </div>
    </div>
  );
};

export default observer(productItem);
