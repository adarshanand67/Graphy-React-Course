import React from "react";
import PropTypes from "prop-types";


const Card = ({ title, description, imgUrl }) => {
  const clickHandler = () => {
    console.log("Button Clicked!");
  };
  return (
    <div className="card m-5 w-96 bg-base-100 p-5 shadow-xl">
      <figure>
        <img src={imgUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn-primary btn" onClick={clickHandler}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

Card.PropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

Card.defaultProps = {
  title: "Card Title",
  description: "Card Description",
  imgUrl: "https://source.unsplash.com/random/900x700/?valentine",
};

export default Card;
