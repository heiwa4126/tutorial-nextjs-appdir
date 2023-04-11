"use client";

interface UserData {
  name: string;
}

const getUsers = async (id: number) => {
  const res = await fetch(`/user/${id}.json`);
  // 自分自身を参照するようなfetch()を使うとbuildできない(当然だけど)
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  const user: UserData = await res.json();
  return user;
};

const User2 = async ({ id }: { id: number }) => {
  const user = await getUsers(id);
  return (
    <>
      <h2 className="text-lg font-bold mt-4">ユーザ</h2>
      <p>Name: {user.name}</p>
    </>
  );
};

export default User2;
