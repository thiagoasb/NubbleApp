import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mw.gSG3vwVEx_7PWxcPj0FhvT21TH7F8avZwZoNgX3rz6yOscfhCyj-fQJ_q_tp',
  },
});
