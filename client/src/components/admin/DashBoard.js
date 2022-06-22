import React from "react";
import SideBar from "./SideBar.js";
import "./Dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { getAllUsers } from "../../actions/userAction.js";
import { getAdminProduct } from "../../actions/productAction";

const DashBoard = () => {
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
              <p>50</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>2</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
