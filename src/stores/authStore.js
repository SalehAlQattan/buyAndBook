// library
import { makeAutoObservable } from 'mobx';
import decode from 'jwt-decode';

// axios
import instance from './instance';

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  signup = async (newUser) => {
    try {
      const response = await instance.post('/signup', newUser);
      this.setUser(response.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  signin = async (user) => {
    try {
      const response = await instance.post('/signin', user);
      this.setUser(response.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  signout = async () => {
    try {
      delete instance.defaults.headers.common.Authorization;
      localStorage.removeItem('myToken');
      this.user = null;
    } catch (error) {}
  };

  // setting the user
  setUser = (token) => {
    localStorage.setItem('myToken', token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  // token checking
  checkForToken = () => {
    const token = localStorage.getItem('myToken');
    if (token) {
      const currentTime = Date.now();
      const user = decode(token);

      if (user.exp >= currentTime) this.setUser(token);
      else this.signout();
    }
  };
}

const authStore = new AuthStore();
// first check for token
authStore.checkForToken();
// exporting new instance of authStore
export default authStore;
