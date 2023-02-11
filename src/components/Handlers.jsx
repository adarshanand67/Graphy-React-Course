import React from "react";

const Handlers = () => {
  const handleClick = (e) => {
    console.log("Button clicked", e);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="m-3 border-2 border-black bg-blue-300 p-3"
        // onMouseEnter={() => console.log("Mouse entered")}
        // onMouseLeave={() => console.log("Mouse left")}
        // onFocus={() => console.log("Focus")}
      >
        <span>Click me</span>
      </button>
    </>
  );
};

export default Handlers;
