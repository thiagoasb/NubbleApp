import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.cKPYncHXGoDvV91Y5se_XpjsjgurCtrrDjOVO6w4ftlr_WuCCE4hoq7nfRRV',
  },
});
