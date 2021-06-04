import { useQuery } from 'react-query';
import axios from 'axios';
import { Users } from '../utils/types';

function useQueryUsers() {
  const response = useQuery<Users, Error>(
    'users',
    async () => {
      const { data } = await axios.get('http://localhost:1080/users');
      return data;
    },
    {
      retry: false,
    },
  );

  return response;
}

export default useQueryUsers;
