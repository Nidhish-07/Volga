import React, { useEffect } from "react";
import SideBar from "./SideBar.js";
import "./Dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { Line } from "react-chartjs-2";
import { getAdminProduct } from "../../actions/productAction.js";
import { getAllUsers } from "../../actions/userAction.js";

const DashBoard = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { users } = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllUsers());
  }, [dispatch]);

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["rgb(0,150,255)"],
        hoverBackgroundColor: ["rgb(0, 0, 255)"],
        data: [0, 4000],
      },
    ],
  };

  return (
    <div className="dashboard">
      <SideBar />
      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> ₹2000
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Products</p>
              <p>{products && products.length}</p>
              {/* <p>50</p> */}
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              {/* <p>2</p> */}
              <p>{users && users.length}</p>
            </Link>
          </div>
        </div>

        <div className="lineChart">
          <Line data={lineState} />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
