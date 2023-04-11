import User2 from "../../components/User2";

const Test2 = async () => {
  return (
    <>
      <h1 className="text-xl font-bold">Testページ</h1>
      {/* @ts-expect-error Async Server Component */}
      <User2 id={123} />
    </>
  );
};

export default Test2;
