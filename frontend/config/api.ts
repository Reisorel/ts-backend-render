// 👇 change manuellement ici entre 'dev' ou 'prod'
const ENV = 'dev'; // ou 'prod'

const API_BASE_URL = ENV === 'dev'
  ? import.meta.env.VITE_API_URL_DEV
  : import.meta.env.VITE_API_URL_PROD;

export default API_BASE_URL;
