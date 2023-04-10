type User = {
  id: number;
  name: string;
  email: string;
};

const getUsers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  // const response = await fetch("https://jsonplaceholder.typicode.com/user");
  if (!response.ok) throw new Error("Something went wrong");
  const users: User[] = await response.json();
  console.log(users);
  return users;
};

const UsersList = async () => {
  const users = await getUsers();
  return (
    <>
      <h2 className="text-lg font-bold mt-4">ユーザ一覧</h2>
      <ul>{users && users.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
    </>
  );
};

export default UsersList;
