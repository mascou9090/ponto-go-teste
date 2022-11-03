import React from "react";
import { Link } from "react-router-dom";
import { BoxNovos, BoxVeteranos, MainS } from "./style";

function Main() {
  return (
    <MainS>
      <Link to="/cadastro">
        <BoxNovos>Cadastrar</BoxNovos>
      </Link>
      <Link to="/AddPoint">
        <BoxVeteranos>Logar</BoxVeteranos>
      </Link>
    </MainS>
  );
}

export default Main;
