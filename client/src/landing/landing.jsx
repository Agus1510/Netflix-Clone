import React from "react";
import style from "./landing.module.css";

function Landing() {
  return (
    <div className={style.flexContainer}>
      <div className={style.mainContainer}>
        <div className={style.firstLine}>
          <img src={"logo.png"} />
          <div className={style.button}>
            <input placeholder="Español"></input>
            <button> Iniciar sesión</button>
          </div>
        </div>
        <div className={style.container}>
          <div className={style.text}>
            <h1>Películas y series ilimitadas y mucho más.</h1>
            <p>Disfruta donde quieras. Cancela cuando quieras.</p>
            <h5>
              ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
              reiniciar tu membresía de Netflix.
            </h5>
            <div className={style.search}>
              <form className={style.form}>
                <input type="email" placeholder="Email" />
                <label for="email">Email</label>
                <button> Comenzar > </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
