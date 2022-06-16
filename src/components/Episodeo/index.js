import React from "react";

const Episodeo = () => {
  return (
    <li>
      <div class="row">
        <div class="col-1 my-auto text-center">
          <h3 class="text-white">1</h3>
        </div>
        <div class="col-4">
          <img class="img-fluid" src={require("../../assets/hero.png")} />
        </div>
        <div class="col-7">
          <h6 class="text-white">Nome do episodeo</h6>
          <p class="text-muted">
            There are many variations of pattern There are many variations of
            pattern There are many variations of
          </p>
        </div>
      </div>
    </li>
  );
};

export default Episodeo;
