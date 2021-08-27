import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8090/pokemon-team/v1',
});

export default api;
