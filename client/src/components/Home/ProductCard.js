import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const ProductCard = (props) => {
  return (
    <Link
      className="itemCard w-[14vmax] flex flex-col no-underline text-gray-700 m-[2vmax] transition-all duration-500]"
      to={`/product/${props.product._id}`}
    >
      <img src={props.product.images[0].url} alt={props.product.name} />
      <p>{props.product.name}</p>
      <span>{`₹${props.product.price}`}</span>
      {/* <p>{props.product.owner}</p>
      <p>{props.product.contactNo}</p> */}
    </Link>
  );
};

export default ProductCard;
