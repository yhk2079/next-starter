import { useQuery } from 'react-query';
import { Users } from '../utils/types';

function useQueryUsersWithFetch() {
  const response = useQuery<Users, Error>(
    'users',
    () => {
      try {
        return fetch('http://localhost:1080/users').then((res) => res.json());
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },
    {
      retry: false,
    },
  );

  return response;
}

export default useQueryUsersWithFetch;
