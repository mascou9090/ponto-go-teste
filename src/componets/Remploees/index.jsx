import React from "react";
import { Link } from "react-router-dom";

function Employees() {
  return (
    <div>
      <Link to="/employees">
        <p>Employees</p>
      </Link>
    </div>
  );
}

export default Employees;
