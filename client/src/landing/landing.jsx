import React from "react";
import style from "./landing.module.css";
import { IoEarthOutline, IoChevronForwardOutline } from "react-icons/io5";

function Landing() {
  return (
    <div className={style.flexContainer}>
      <div className={style.mainContainer}>
        <div className={style.firstLine}>
          <img src={"logo.png"} />
          <div className={style.button}>
            <div className={style.selectDiv}>
              <select name="language" className={style.select}>
                <option value="spanish">Español</option>
                <option value="english">Ingles</option>
              </select>
            </div>
            <button>Iniciar sesión</button>
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
                <button>
                  Comenzar <IoChevronForwardOutline />
                </button>
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
      <div className={style.secondContainer}>
        <div className={style.secondFlex}>
          <div className={style.secondText}>
            <h1>Disfruta donde quieras.</h1>
            <p>
              Películas y series ilimitadas en tu teléfono, tablet, computadora
              y TV sin costo adicional.
            </p>
          </div>
          <div className={style.image}>
            <div className={style.videoDiv2}>
              <video className={style.video2} autoPlay playsInline muted loop>
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
            <img src="device-pile.png" />
          </div>
        </div>
      </div>
      <div className={style.secondContainer}>
        <div className={style.secondFlex}>
          <div className={style.image}>
            <img src="kids.png" />
          </div>
          <div className={style.secondText}>
            <h1>Crea perfiles para niños.</h1>
            <p>
              Los niños vivirán aventuras con sus personajes favoritos en un
              espacio diseñado exclusivamente para ellos, sin costo con tu
              membresía.
            </p>
          </div>
        </div>
      </div>
      <div className={style.thirdContainer}>
        <div className={style.thirdFlex}>
          <div className={style.thirdText}>
            <h1>Preguntas frecuentes.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
