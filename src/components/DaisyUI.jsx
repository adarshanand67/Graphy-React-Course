import React from "react";
import { coolGray } from "tailwindcss/colors";

const DaisyUI = () => {
  const clickHandler = () => {
    console.log("Clicked!");
  };
  return (
    <div className="card m-5 w-96 bg-base-100 p-5 shadow-xl">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn-primary btn" onClick={clickHandler}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DaisyUI;
