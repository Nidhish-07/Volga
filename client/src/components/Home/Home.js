import React, { Fragment, useEffect } from "react";
import "./Home.css";
import ProductCard from "./ProductCard";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Volga" />
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
            {products &&
              products.map((product) => <ProductCard product={product} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
