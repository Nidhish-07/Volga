import React, { Fragment } from "react";
import "./Home.css";
import Item from "./Item";

const item = {
  name: "Blueeee",
  price: 54545,
  _id: "Me",
  images: [
    {
      url: "https://i.ibb.co/DRST11n/1.webp",
    },
  ],
};

const Home = () => {
  return (
    <Fragment>
      <div className="banner flex flex-col text-center items-center justify-center h-[100vmin] ">
        <h1>Welcome to Volga</h1>

        <a href="#container">
          <button>Scroll</button>
        </a>
      </div>

      <h2 className="heading text-[1.5vmax] font-bold font-serif text-center border-b-[1px] border-solid border-slate-700 w-[20vmax] p-[1vmax] mx-auto my-[5vmax] text-[rgba(0,0,0,0.7)]">
        Featured Items
      </h2>

      <div
        className="container flex my-[2vmax] mx-auto w-[80vw] flex-wrap justify-center max-w-[100%]"
        id="container"
      >
        <Item item={item} />
        <Item item={item} />
        <Item item={item} />
        <Item item={item} />
        <Item item={item} />
        <Item item={item} />
        <Item item={item} />
        <Item item={item} />
        <Item item={item} />
      </div>
    </Fragment>
  );
};

export default Home;
