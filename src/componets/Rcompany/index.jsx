import React from "react";
import { Link } from "react-router-dom";
import { FormCompany } from "./style";

function Companys() {
  return (
    <div>
      <Link to="/company">
        <FormCompany>
          <form>
            
          </form>
        </FormCompany>
      </Link>
    </div>
  );
}

export default Companys;
