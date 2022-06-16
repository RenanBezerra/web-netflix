import React from "react";
import Header from "../../components/Header";

const Login = () => {
  return (
    <div
      class="container-fluid bg_filmes"
      style={{
        position: "fixed",
        height: "100%",
      }}
    >
      <Header />
      <div id="caixa_login" class="col-4 offset-4">
        <h1 class="text-white">Entrar</h1>
        <br />
        <form>
          <input
            type="email"
            class="form-control form-control-lg"
            placeholder="Email ou numero de telefone"
          />
          <br />
          <input
            type="email"
            class="form-control form-control-lg"
            placeholder="Senha"
          />
          <br />
          <button class="btn btn-lg btn-block btn-danger">Entrar</button>
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
        </form>
      </div>
    </div>
  );
};

export default Login;
