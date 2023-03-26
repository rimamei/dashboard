import axios from 'axios';

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default Axios;
