import React from "react";
import "./PageNotFound.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import ErrorIcon from "@material-ui/icons/Error";

const PageNotFound = () => {
  return (
    <div className="PageNotFound">
      <ErrorIcon />

      <Typography>Page Not Found </Typography>
      <Link to="/">Home</Link>
    </div>
  );
};

export default PageNotFound;
