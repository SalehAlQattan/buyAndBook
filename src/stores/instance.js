// library
import axios from 'axios';

// const instance = axios.create({ baseURL: 'http://localhost:8000' });
const instance = axios.create({
  baseURL: 'https://buy-and-book-api-7b5hq.ondigitalocean.app/',
});

export default instance;
