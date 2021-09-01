// rect
import { observer } from 'mobx-react';
import React from 'react';

// router
import { Link } from 'react-router-dom';

// components

// stores
import authStore from '../../stores/authStore';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <div
          className='d-flex justify-content-center collapse navbar-collapse'
          id='id="navbarNav"'
        >
          <ul className='navbar-nav fs-3'>
            {authStore.user && (
              <li className='nav-item'>
                Welcome Back {authStore.user.username}
              </li>
            )}

            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-link'>
                Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default observer(NavBar);
