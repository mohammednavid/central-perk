import React from "react";
import "./Card.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateContext } from "./StateProvider";

function Card({ id, img, title, ratings, price }) {
  const [{ cart }, dispatch] = useStateContext();

  const addToCart = () => {
    // DISPATCH THE ITEMS INTO DATA LAYER
    dispatch({
      type: "ADD_TO_CART",
      items: {
        id: id,
        img: img,
        title: title,
        ratings: ratings,
        price: price,
      },
    });
  };
  return (
    <div className="card__full">
      <div className="card">
        <img src={img} alt="" />
        <button onClick={addToCart} className="card__imgButton">
          ADD TO CART
        </button>
      </div>
      <div className="card__content">
        <h5>{title}</h5>
        <p>
          <StarIcon />
          {ratings}
        </p>
        <h6>₹{price}</h6>
      </div>
    </div>
  );
}

export default Card;
