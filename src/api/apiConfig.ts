import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.alB56Q8s2TzFnAuWE6XApzprF-coJqezlqylegvKpsgx_DEuvpexpxfAyZP-',
  },
});
