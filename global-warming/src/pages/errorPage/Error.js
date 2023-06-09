import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div class="errorPage">
      <div className="content">
        <h1>Error 404</h1>
        <p>Page not found</p>
        <Link to="/">
          <button className="button">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
