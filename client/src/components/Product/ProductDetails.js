import React, { Fragment, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetails } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id, error, alert]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${product.name} --- Volga`} />
          <div className="productDetails">
            <div>
              <Carousel>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>

            <div>
              <div className="detailsBlock1">
                <h2 className="text-xl">{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>
              <div className="detailsBlock2 flex flex-col">
                <h2 className="text-xl  text-left">Owner: {product.owner}</h2>
                <p>Contact No.:{product.contactNo}</p>
              </div>
              <div className="detailsBlock3">
                <h1 className="text-xl">{`₹${product.price}`}</h1>
                <div className="detailsBlock3-1">
                  <button>Add to Order</button>
                </div>
                <p>
                  Status:
                  <b
                    className={
                      product.stock < 1 ? "text-red-600" : "text-green-600"
                    }
                  >
                    {product.stock < 1 ? "Not available" : "Available"}
                  </b>
                </p>
              </div>
              <div className="detailsBlock4">
                Description: <p>{product.description}</p>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
