import React from "react";
import "../styles/Portfolio.css";
import vlogo from "../assets/VFilms Logo.png";
import frame from "../assets/frame.jpg";
import camGroup from "../assets/Cam Group.png";
import mandala from "../assets/mandala 2.0.png";
import rectLeft from "../assets/Rectangle 44.jpg";
import rectRight from "../assets/Rectangle 44.jpg";
import vector9 from "../assets/Vector 9.jpg";
import vector10 from "../assets/Vector 10.jpg";

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <img src={vlogo} alt="VFilms Logo" className="portfolio__logoTopLeft" />
      <h2 className="portfolio__title">The Highlight Reel</h2>
      <p className="portfolio__subtitle">Watch the magic we’ve captured.</p>
      <div className="portfolio__reel">
        <img src={frame} alt="Film Frame" className="portfolio__frame" />
        <div className="portfolio__videoWrapper">
          <img src={rectLeft} alt="" className="portfolio__panelRect portfolio__panelRect--left" />
          <img src={vector10} alt="" className="portfolio__panelVector portfolio__panelVector--left" />
          <img src={rectRight} alt="" className="portfolio__panelRect portfolio__panelRect--right" />
          <img src={vector9} alt="" className="portfolio__panelVector portfolio__panelVector--right" />
          <img src={camGroup} alt="" className="portfolio__cam" />
          <img src={mandala} alt="" className="portfolio__mandala" />
        </div>
      </div>
    </section>
  );
}
