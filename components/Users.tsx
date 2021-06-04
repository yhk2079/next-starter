import * as React from 'react';
import useQueryUsers from '../hooks/useQueryUsers';

const Users = React.memo(function Users() {
  const { data = [], isLoading } = useQueryUsers();

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <div>
      Users
      {data.map(({ id, email, name }) => (
        <div key={id}>
          <div>{`email: ${email}`}</div>
          <div>{`name: ${name}`}</div>
        </div>
      ))}
    </div>
  );
});

export default Users;
