import React from "react";
import { FormEmployees } from "./style";

function Employees() {
  return (
    <FormEmployees>
          <h1>Cadastro de funcionário</h1>
          <form>
            <label>
              Email:
              <input type="text" />
            </label>
            <label>
              CPF:
              <input type="text" />
            </label>
            <label>
              Primeiro nome:
              <input type="text" />
            </label>
            <label>
              Segundo nome:
              <input type="text" />
            </label>
            <label>
              Data ede adimissão:
              <input type="text" />
            </label>
            <label>
              Data de aniversario:
              <input type="text" />
            </label>
            <label>
              Escrição:
              <input type="text" />
            </label>
            <label>
              PIS:
              <input type="email" />
            </label>
            <label>
              Ponto de admissão da empresa:
              <input type="text" />
            </label>
            <label>
              CLT:
              <input type="check" />
            </label>
            <button type="submit">Cadastrar</button>
          </form>
    </FormEmployees>
  );
}

export default Employees;
