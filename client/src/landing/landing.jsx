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
      <div className={style.secondContainer}>
        <div className={style.secondFlex}>
          <div className={style.secondText}>
            <h1>Disfruta en tu TV.</h1>
            <p>
              Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV,
              reproductores de Blu-ray y más.
            </p>
          </div>
          <div className={style.image}>
            <div className={style.videoDiv}>
              <video className={style.video} autoPlay playsInline muted loop>
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
            <img src="tv.png" />
          </div>
        </div>
      </div>
      <div className={style.secondContainer}>
        <div className={style.secondFlex}>
          <div className={style.image}>
            <img src="mobile-0819.jpg" />
            <div className={style.box}>
              <div className={style.boxShot}>
                <img src="boxshot.png" />
                <div className={style.boxShotText}>
                  <h1>Stranger Things</h1>
                  <p>Descargando...</p>
                </div>
                <div className={style.boxShotGif}></div>
              </div>
            </div>
          </div>
          <div className={style.secondText}>
            <h1>Descarga tus series para verlas offline.</h1>
            <p>Guarda tu contenido favorito y tendrás siempre algo para ver.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
