import UsersList from "./UsersList";
import Counter from "./Countret";
import { Suspense } from "react";

const Test = async () => {
  return (
    <>
      <h1 className="text-xl font-bold">Testページ</h1>
      <Counter />
      {/* Counterもサーバー側で静的に生成される。クライアント側でハイドレーションされcsrとなる */}

      <Suspense fallback={<p className="mt-4">ユーザデータ Loading...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <UsersList />
        {/* UsersListはbuild時に静的に生成されてしまう。devの時はリロードすると更新される */}
      </Suspense>
    </>
  );
};

export default Test;
