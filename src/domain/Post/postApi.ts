import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  // TODO simular delay
  return postListMock;
}

export const postApi = {
  getList,
};
