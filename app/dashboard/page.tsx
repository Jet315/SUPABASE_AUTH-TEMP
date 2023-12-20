import { sql } from '@vercel/postgres';
import { Card, Title, Text } from '@tremor/react';
import Search from './search';
import UsersTable from './table';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function IndexPage(){
  const users = [
    { id: 1, name: 'John Doe', username: 'john_doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', username: 'jane_smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Bob Johnson', username: 'bob_johnson', email: 'bob.johnson@example.com' },
    // Add more users as needed
  ];
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Stores</Title>
      <Text>A list of your stores</Text>
      <Search />
      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>
    </main>
  );
}
