// react
import React from 'react';

// mobx
import { observer } from 'mobx-react';

// stores
import productStore from '../../stores/productStore';

// components
import ProductItem from './ProductItem';
import CreateButton from './buttons/CreateButton';

const ProductList = () => {
  const productList = productStore.products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));
  return (
    <>
      <CreateButton />
      <div
        className='container'
        style={{
          textAlign: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        {productList}
      </div>
    </>
  );
};

export default observer(ProductList);
