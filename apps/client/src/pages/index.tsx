import { useState } from "react";
import reactLogo from "../assets/react.svg";
import { trpc } from "../utils/trpc";
import { useQuery } from "@tanstack/react-query";

const baconApi = async () => {
  const response = await fetch("http://localhost:3000/v1/info");
  const data = await response.json();
  console.log(data);
  return data as { info: string };
};

export const IndexPage = () => {
  const [count, setCount] = useState(0);
  const { isLoading, isError, data } = trpc.getBeef.useQuery("hello");
  const { data: baconData } = useQuery(["bacon"], baconApi);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>{data.data}</p>
        <p>{baconData?.info}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};
