import {useEffect, useState} from 'react';

import {Post, postService} from '@domain';

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [page, setPage] = useState(1);

  async function fetchInitialData() {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList(1);
      setPage(2); //TODO validar se realmente tem a página 2
      setPostList(list);
    } catch (err) {
      // console.log('ERROR:', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function fetchNextPage() {
    if (loading) {
      return;
    }

    try {
      setLoading(true);
      const list = await postService.getList(page);
      setPostList(prev => [...prev, ...list]);
      setPage(prev => prev + 1);
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchInitialData();
  }, []);

  return {
    postList,
    error,
    loading,
    refresh: fetchInitialData,
    fetchNextPage,
  };
}
