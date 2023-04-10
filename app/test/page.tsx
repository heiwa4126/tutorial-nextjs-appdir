// import UsersList from "../UsersList";

type User = {
  id: number;
  name: string;
  email: string;
};

const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();
  console.log(users);
  return users;
};





const Test = async () => {
  const users = await getUsers();

  return (
    <>
      <h1 className="text-xl font-bold">Testページ</h1>
      <h2 className="text-lg font-bold mt-4">ユーザ一覧</h2>
      <ul>{users && users.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
    </>
  );
};

export default Test;
