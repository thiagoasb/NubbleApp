import {PageAPI, PageParams, api} from '@api';

import {PostAPI} from './postType';

async function getList(params?: PageParams): Promise<PageAPI<PostAPI>> {
  await new Promise(resolve => setTimeout(() => resolve(''), 1000));
  const response = await api.get<PageAPI<PostAPI>>('user/post', {
    params,
  });
  return response.data;
}

export const postApi = {
  getList,
};
