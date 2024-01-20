import {PageAPI, api} from '@api';

import {PostAPI} from './postType';

async function getList(): Promise<PageAPI<PostAPI>> {
  await new Promise(resolve => setTimeout(() => resolve(''), 1000));
  const response = await api.get<PageAPI<PostAPI>>('user/post');
  return response.data;

  // let response = await fetch('http://localhost:3333/user/post', {
  //   method: 'GET',
  //   headers: {
  //     Authorization:
  //       'Bearer MQ.cKPYncHXGoDvV91Y5se_XpjsjgurCtrrDjOVO6w4ftlr_WuCCE4hoq7nfRRV',
  //   },
  // });

  // let data: PageAPI<PostAPI> = await response.json();

  // return data;
}

export const postApi = {
  getList,
};
