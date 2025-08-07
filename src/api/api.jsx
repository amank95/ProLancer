
import axios from 'axios';
//const DEPLOYED='https://royalnavy-ecommerce.vercel.app/'
// const LOCALHOST='http://localhost:4000'

// export const API_BASE_URL = LOCALHOST;

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials:true,
});
console.log("API baseURL:", api.defaults.baseURL);

const token = localStorage.getItem('jwt');

api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
