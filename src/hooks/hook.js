import { useQuery } from 'react-query';

export const useData = () => {
  const { isLoading, error, data, isFetching, refetch } = useQuery(
    'getData',
    () =>
      fetch('https://jsonplaceholder.typicode.com/todos/').then((res) =>
        res.json()
      )
  );

  return { isLoading, error, data, isFetching, refetch };
};
