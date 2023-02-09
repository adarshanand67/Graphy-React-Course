import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="mx-auto w-1/2 border-2 p-4 shadow-2xl">
      <p className="text-center text-3xl font-bold">{count}</p>
      <div className="flex flex-row justify-center">
        <button
          onClick={() => setCount(count + 1)}
          className="m-5 border-2 bg-green-400 p-4 text-3xl shadow-2xl"
        >
          +
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="m-5 border-2 bg-red-400 p-4 text-3xl shadow-2xl"
        >
          -
        </button>
        <button
          onClick={() => setCount(0)}
          className="m-5 border-2 bg-gray-400 p-4 text-3xl shadow-2xl"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
