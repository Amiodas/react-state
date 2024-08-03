import React, { useState } from "react";

const CounterWithFuncCompoent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="border border-red-300 p-5">
      <button
        className="button bg-purple-500 p-4 rounded-lg text-white"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Counter from func: <span className="font-medium">({count})</span>
      </button>
    </div>
  );
};

export default CounterWithFuncCompoent;
