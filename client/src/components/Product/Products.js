import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

const categories = [
  "Books",
  "USB Drive",
  "Academics",
  "Non-academics",
  "Shoes",
  "Devices",
  "Smartphone",
  "item",
];
const Products = ({ match }) => {
  const dispatch = useDispatch();
  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);
  const keyword = match.params.keyword;

  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
 

  let count = filteredProductsCount;

  useEffect(() => {
    dispatch(getProduct(keyword, currentPage, category));
  }, [dispatch, keyword, currentPage, category]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <h2 className="productsHeading mx-auto my-[2vmax] w-[15vw] border-b-[1px] border-b-black p-[2vmax] text-gray-900 text-center text-2xl">
            Products
          </h2>
          <div className="products flex flex-wrap py-0 px-[5vmax] justify-center">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <div className="filter">
         

            <Typography>Categories</Typography>
            <ul className="categories">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {resultPerPage < count && (
            <div className="pagination flex justify-center m-[6vmax]">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
