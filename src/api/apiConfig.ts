import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mg.Tuq_FJ1Yy0xlXcowezEXSaf87EYzObogHCs3wKJdxcpG5ITOFPDunkI5suO5',
  },
});
