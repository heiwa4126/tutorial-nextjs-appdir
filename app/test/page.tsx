import UsersList from "./UsersList";
import Counter from "./Countret";

const Test = async () => {
  return (
    <>
      <h1 className="text-xl font-bold">Testページ</h1>
      <Counter />
      {/* Counterもサーバー側で静的に生成される。クライアント側でハイドレーションされcsrとなる */}
      {/* @ts-expect-error Async Server Component */}
      <UsersList />
      {/* UsersListはbuild時に静的に生成されてしまう。devの時はリロードすると更新される */}
    </>
  );
};

export default Test;
