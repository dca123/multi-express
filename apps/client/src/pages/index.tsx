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
  const { isLoading, isError, data } = trpc.getPork.useQuery("hello");
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
      <h1>Routing Controllers + TRPC + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
        <br />
        <h2>TRPC</h2>
        <p>{data.data}</p>
        <br />
        <h2>Routing Controllers</h2>
        <p>{baconData?.info}</p>
      </div>
    </div>
  );
};
