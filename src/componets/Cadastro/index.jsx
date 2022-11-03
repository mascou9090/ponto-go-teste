import React from "react";
import { Link } from "react-router-dom";
import { BoxNovos, BoxVeteranos, MainS } from "../Main/style";

function Cadastro() {
  return (
    <MainS>
      <Link to="/companys">
        <BoxNovos>Empresa</BoxNovos>
      </Link>
      <Link to="/employees">
        <BoxVeteranos>Funcionário</BoxVeteranos>
      </Link>
    </MainS>
  );
}

export default Cadastro;
