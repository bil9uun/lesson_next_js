import React, { useState } from "react";

const index = () => {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  return (
    <div className="h-screen bg-slate-400 flex flex-col justify-center items-center">
      <h1 className="mb-6">
        Too:<span>{count}</span>
      </h1>
      <div>
        <button
          className="border-[3px] mx-4 border-green-800  px-4"
          onClick={plus}
        >
          Plus
        </button>
        <button
          className="border-[3px] mx-4 border-red-800 px-4"
          onClick={minus}
        >
          Minus
        </button>
      </div>
    </div>
  );
};

export default index;
