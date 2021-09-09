// library
import axios from 'axios';

// const instance = axios.create({ baseURL: 'http://localhost:8000' });
const instance = axios.create({
  baseURL: 'https://floating-basin-61720.herokuapp.com',
});

export default instance;
