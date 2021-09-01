// react
import React from 'react';
import authStore from '../../stores/authStore';

// mobx
import { observer } from 'mobx-react';

// components
import SignupButton from '../authentication/buttons/SignupButton';
import SigninButton from '../authentication/buttons/SigninButton';

const Home = () => {
  return (
    <div>
      <SignupButton />
      <SigninButton />
      <button className='btn btn-primary' onClick={authStore.signout}>
        Signout
      </button>
    </div>
  );
};

export default observer(Home);
