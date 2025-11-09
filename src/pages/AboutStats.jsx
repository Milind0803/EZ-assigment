import React from "react";
import "../styles/AboutStats.css";
import vlogo from "../assets/VFilms Logo.png";
import cards from "../assets/cards.png";
import cola from "../assets/cola.png";
import mountains from "../assets/mountains.png";

export default function AboutStats() {
  return (
    <section className="aboutstats">
      <img className="aboutstats__logo" src={vlogo} alt="VFilms" />

      <div className="aboutstats__left">
        <h3 className="aboutstats__title">A montage of familiar faces and names.</h3>

        <p className="aboutstats__para">
          Some stories come from the biggest names.<br/>
          Others begin with bold, rising voices.<br/>
          We’ve been fortunate to walk alongside both –<br/>
          listening, creating, and building stories that<br/>
          matter.
        </p>

        <div className="aboutstats__cards">
          <div className="aboutstats__card aboutstats__card--left">
            <img src={cards} alt="" />
            <div className="aboutstats__cardText">
              <strong>85+</strong>
              <span>Projects</span>
            </div>
          </div>

          <div className="aboutstats__card aboutstats__card--mid">
            <img src={cards} alt="" />
            <div className="aboutstats__cardText">
              <strong>50+</strong>
              <span>Happy Clients</span>
            </div>
          </div>

          <div className="aboutstats__card aboutstats__card--right">
            <img src={cards} alt="" />
            <div className="aboutstats__cardText">
              <strong>10+</strong>
              <span>Experts Team</span>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutstats__right">
        <p className="aboutstats__quote">
          Every project is more than just a brief –<br/>
          it’s a new chapter waiting to be written.<br/>
          Together, we’ve crafted tales that inspire,<br/>
          connect, and endure.
        </p>

        <img className="aboutstats__cola" src={cola} alt="Coca-Cola" />
        <img className="aboutstats__mountains" src={mountains} alt="Mountains" />
      </div>
    </section>
  );
}
