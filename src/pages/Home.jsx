import React from "react";
import "..//styles/Home.css";
import heroMandala from "../assets/Hero Mandala.png";
import vfilmsLogo from "../assets/VFilms Logo.png";

export default function Home() {
  return (
    <main className="hero">
      <div className="hero__stage">
        <div className="hero__art">
          <img className="hero__mandala" src={heroMandala} alt="Hero Mandala" />
          <img className="hero__logo" src={vfilmsLogo} alt="V Films" />
        </div>
        <div className="hero__right">
          <h1 className="hero__quote">
            Varnan is where stories find<br />their voice and form
          </h1>
          <p className="hero__tags">Films . Brands . Art</p>
          <p className="hero__about">
            Since 2009, V’ve been telling stories – stories of people,
            their journeys, and the places that shape them. Some begin in
            polished boardrooms, others in humble village squares. But every
            story starts the same way – by listening with intention. We believe
            it takes trust, patience, and an eye for the unseen to capture what
            truly matters. V doesn’t just tell stories – V honors them.
          </p>
        </div>
      </div>
    </main>
  );
}
