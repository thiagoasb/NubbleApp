import {useEffect, useState} from 'react';

import {useInfiniteQuery} from '@tanstack/react-query';
import {Page} from '@types';

interface UsePaginatedListResult<TData> {
  list: TData[];
  isError: boolean | null;
  isLoading: boolean;
  refresh: () => void;
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

export function usePaginatedList<Data>(
  queryKey: readonly unknown[],
  getList: (page: number) => Promise<Page<Data>>,
): UsePaginatedListResult<Data> {
  const [list, setList] = useState<Data[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<boolean | null>(null);
  // const [page, setPage] = useState(1);
  // const [hasNextPage, setHasNextPage] = useState(true);

  const query = useInfiniteQuery({
    queryKey,
    queryFn: ({pageParam = 1}) => getList(pageParam),
    getNextPageParam: ({meta}) =>
      meta.hasNextPage ? meta.currentPage + 1 : undefined,
  });

  useEffect(() => {
    if (query.data) {
      const newList = query.data.pages.reduce<Data[]>((prev, curr) => {
        return [...prev, ...curr.data];
      }, []);

      setList(newList);
    }
  }, [query.data]);

  // async function fetchInitialData() {
  //   try {
  //     setError(null);
  //     setLoading(true);
  //     const {data, meta} = await getList(1);
  //     if (meta.hasNextPage) {
  //       setPage(2);
  //       setHasNextPage(true);
  //     } else {
  //       setHasNextPage(false);
  //     }
  //     setList(data);
  //   } catch (err) {
  //     // console.log('ERROR:', error);
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // async function fetchNextPage() {
  //   if (loading || !hasNextPage) {
  //     return;
  //   }

  //   try {
  //     setLoading(true);
  //     const {data, meta} = await getList(page);
  //     setList(prev => [...prev, ...data]);
  //     if (meta.hasNextPage) {
  //       setPage(2);
  //     } else {
  //       setHasNextPage(false);
  //     }
  //     setPage(prev => prev + 1);
  //   } catch (er) {
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   fetchInitialData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return {
    list,
    isError: query.isError,
    isLoading: query.isLoading,
    refresh: query.refetch,
    fetchNextPage: query.fetchNextPage,
    hasNextPage: !!query.hasNextPage,
  };
}
