import React from "react";

const Header = () => {
  return (
    <header class="row">
      <div class="col-2">
        <img id="logo-netflix" src={require("../../assets/logo-netflix.png")} />
      </div>
      <div class="col-8">
        <ul class="menu_list">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Series</a>
          </li>
          <li>
            <a href="#">Filmes</a>
          </li>
          <li>
            <a href="#">Mais Recentes</a>
          </li>
          <li>
            <a href="#">Minha Lista </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
