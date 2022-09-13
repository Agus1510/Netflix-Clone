import React from "react";
import style from "./footer.module.css";

function Footer() {
  return (
    <div className={style.flexContainer}>
      <div className={style.container}>
        <h3>¿Preguntas? Llama al 0800 345 1593</h3>
        <div className={style.categories}>
          <p>Preguntas frecuentes</p>
          <p>Centro de ayuda</p>
          <p>Cuenta</p>
          <p>Prensa</p>
          <p>Relaciones con inversionistas</p>
          <p>Empleo</p>
          <p>Formas de ver</p>
          <p>Términos de uso</p>
          <p>Privacidad</p>
          <p>Preferencias de cookies</p>
          <p>Información corporativa</p>
          <p>Contáctanos</p>
          <p>Prueba de velocidad</p>
          <p>Avisos legales</p>
          <p>Solo en Netflix</p>
        </div>
        <div className={style.selectDiv}>
          <select name="language" className={style.select}>
            <option value="spanish">Español</option>
            <option value="english">Ingles</option>
          </select>
        </div>
        <p>Netflix Argentina</p>
      </div>
    </div>
  );
}

export default Footer;
