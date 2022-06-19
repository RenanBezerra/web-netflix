import React, { useState, useEffect } from "react";

const Header = ({ hideMenu }) => {
  const [user, setUser] = useState({});

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("@user")));
  }, []);

  return (
    <header class="row">
      <div class="col-2">
        <img id="logo-netflix" src={require("../../assets/logo-netflix.png")} />
      </div>
      {!hideMenu && (
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
      )}

      <div className="col-2 text-right">
        <a onClick={logout} className="text-white">
          Olá Sair
        </a>
      </div>
    </header>
  );
};

export default Header;
