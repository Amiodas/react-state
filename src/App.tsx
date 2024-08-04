import React, { useState } from "react";
import "./App.css";
// import CounterWithClass from './components/CounterWithClassComponent';
import CounterWithFuncCompoent from "./components/CounterWithFuncComponent";
import UserInfoWithUseState from "./components/UserInfoWithUseState";
import UserInfoWithUserReducer from "./components/UserInfoWithUserReducer";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="App border border-purple-500 p-10 m-10">
        <h1 className="text-2xl font-semibold mb-2">React app</h1>
        <p className="mb-4 text-left">Value of counter: {count}</p>
        {/* <CounterWithClass /> */}
        <CounterWithFuncCompoent count={count} setCount={setCount} />
      </div>
      <div className="flex justify-center border border-blue-600 mx-10 p-10">
        {/* <UserInfoWithUseState /> */}
        <UserInfoWithUserReducer />
      </div>
    </div>
  );
}

export default App;
