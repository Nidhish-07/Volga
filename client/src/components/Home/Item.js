import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Item = (props) => {
  return (
    <Link
      className="itemCard w-[14vmax] flex flex-col no-underline text-gray-700 m-[2vmax] transition-all duration-500]"
      to={props.item._id}
    >
      <img src={props.item.images[0]} alt={props.item.name} />
      <p>{props.item.name}</p>
      <span>{props.item.price}</span>
    </Link>
  );
};

export default Item;
