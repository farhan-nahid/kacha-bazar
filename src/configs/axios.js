import axios from 'axios';

const publicRequest = axios.create({
  baseURL: 'https://kacha-bazar.onrender.com',
});

export default publicRequest;
