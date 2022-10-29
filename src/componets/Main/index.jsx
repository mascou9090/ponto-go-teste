import React from "react";
import { Link } from "react-router-dom";
import { BoxCompany, BoxEmployees, MainS } from "./style";

function Main() {
  return (
    <MainS>
      <Link to="/company">
        <BoxCompany>Companys</BoxCompany>
      </Link>
      <Link to="/employees">
        <BoxEmployees>Employees</BoxEmployees>
      </Link>
    </MainS>
  );
}

export default Main;
