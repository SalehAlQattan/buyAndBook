// react
import React from 'react';

// mobx
import { observer } from 'mobx-react';

// components
// import SignupButton from '../authentication/buttons/SignupButton';
import SigninButton from '../authentication/buttons/SigninButton';
import { HomeWrapper } from './styles';
import authStore from '../../stores/authStore';

const Home = () => {
  return (
    <HomeWrapper>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome To Your Dashboard</h1>
        <p>Here You Can Create, Update, and Delete Your Products</p>
      </div>
      {!authStore.user && (
        <div style={{ textAlign: 'center' }}>
          <h2>Signin To Go To Your Dashboard</h2>
          <SigninButton />
        </div>
      )}
      {/* <SignupButton /> */}
    </HomeWrapper>
  );
};

export default observer(Home);
