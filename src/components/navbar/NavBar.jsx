// react
import React from 'react';

// mobx
import { observer } from 'mobx-react';

// components
import { NavBarStyled } from './styles';
import { NavItem } from './styles';

// stores
import authStore from '../../stores/authStore';

const NavBar = () => {
  //
  function toPascalCase(string) {
    return `${string}`
      .replace(new RegExp(/[-_]+/, 'g'), ' ')
      .replace(new RegExp(/[^\w\s]/, 'g'), '')
      .replace(
        new RegExp(/\s+(.)(\w+)/, 'g'),
        ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
      )
      .replace(new RegExp(/\s/, 'g'), '')
      .replace(new RegExp(/\w/), (s) => s.toUpperCase());
  }

  return (
    <NavBarStyled>
      {authStore.user && (
        <div style={{ display: 'flex', gap: '1rem' }}>
          <NavItem to='/'>
            <button
              className='btn btn-secondary'
              onClick={() => authStore.signout()}
            >
              Signout
            </button>
          </NavItem>
          <h2>Welcome Back {toPascalCase(authStore.user.username)}</h2>
        </div>
      )}
      <NavItem to='/'>
        <h2>Home</h2>
      </NavItem>
      <NavItem to='/products'>
        <h2>Products</h2>
      </NavItem>
    </NavBarStyled>
  );
};

export default observer(NavBar);
