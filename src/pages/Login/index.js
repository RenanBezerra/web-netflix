import React, { useState } from "react";
import Header from "../../components/Header";

import api from "../../services/api";

const Login = () => {
  const [credenciais, setCredenciais] = useState({
    email: "",
    senha: "",
  });

  const login = async () => {
    try {
      const response = await api.post("/usuario/login", credenciais);
      const res = response.data;

      console.log(res);
      if (res.error) {
        alert(res.message);

        return false;
      }

      localStorage.setItem("@user", JSON.stringify(res.usuario));
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      class="container-fluid bg_filmes"
      style={{
        position: "fixed",
        height: "100%",
      }}
    >
      <Header hideMenu />

      <div id="caixa_login" class="col-4 offset-4">
        <h1 class="text-white">Entrar</h1>
        <br />
        <>
          <input
            type="email"
            class="form-control form-control-lg"
            placeholder="Email ou numero de telefone"
            onChange={(e) => {
              setCredenciais({
                ...credenciais,
                email: e.target.value,
              });
            }}
          />
          <br />
          <input
            type="password"
            class="form-control form-control-lg"
            placeholder="Senha"
            onChange={(e) => {
              setCredenciais({
                ...credenciais,
                senha: e.target.value,
              });
            }}
          />
          <br />
          <button class="btn btn-lg btn-block btn-danger" onClick={login}>
            Entrar
          </button>
          <div class="row mt-4">
            <div class="col text-muted">
              <input type="checkbox" /> Lembrar de mim.
            </div>
            <div class="col text-right">
              <a href="#" class="text-muted">
                Prceisa de ajuda
              </a>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Login;
