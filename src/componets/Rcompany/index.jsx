import React from "react";
import { FormCompany } from "./style";

function Companys() {
  return (
    <div>
        <FormCompany>
          <h1>Cadastro de empresa</h1>
          <form>
            <label>
              Nome:
              <input type="text"/>
            </label>
            <label>
              Telefone:
              <input type="text"/>
            </label>
            <label>
              Email:
              <input type="email"/>
            </label>
            <label>
              CNPJ:
              <input type="text"/>
            </label>
            <label>
              Razão Social:
              <input type="text"/>
            </label>
            <button type="submit">Cadastrar</button>
          </form>
        </FormCompany>
    </div>
  );
}

export default Companys;
