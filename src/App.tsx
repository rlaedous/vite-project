import  useFetch from "./hooks/useFetch";
import  useInput  from "./hooks/useInput";

const baseUrl = "https://jsonplaceholder.typicode.com";

const App = () => {
  const [text, inputHandler, xx] = useInput("어떤걸 적어도 안뜸 ㅋ");
  const [text2, inputHandler2, xx2] = useInput("또다른 안녕");

  const { data, fetchUrl, loading } = useFetch(baseUrl, "users");
  console.log("data", data);
  console.log("loading", loading);

  if (!data) {
    return <div>새로고침 로딩중입니다.</div>;
  }

  console.log("data", data);
  console.log("loading", loading);

  return (
    <>
      <h1>useInput</h1>
      <input value={text} onChange={inputHandler} />
      <button onClick={xx}>확인</button>
      <br />
      <input value={text2} onChange={inputHandler2} />
      <button onClick={xx2}>확인</button>

      <h1>useFetch</h1>
      <button onClick={() => fetchUrl("users")}>Users</button>
      <button onClick={() => fetchUrl("posts")}>Posts</button>
      <button onClick={() => fetchUrl("todos")}>Todos</button>
      <pre>
        {loading ? (
          <div>데이터 로딩중입니다.</div>
        ) : (
          <>{JSON.stringify(data, null, 2)}</>
        )}
      </pre>
    </>
  );
};

export default App;
