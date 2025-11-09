import React from "react";
import "../styles/About.css";
import vlogo from "../assets/VFilms Logo.png";
import gate from "../assets/india gate.png";
import group9 from "../assets/Group 9.png";
import sticky from "../assets/Group 1.png";
import v0 from "../assets/Vector.png";
import v1 from "../assets/Vector (1).png";
import v2 from "../assets/Vector (2).png";
import fm from "../assets/Film Makers.png";
import be from "../assets/Branding Experts.png";
import ac from "../assets/Art Curators.png";

export default function About() {
  return (
    <section className="about">
      <img className="about__logo" src={vlogo} alt="VFilms" />
      <img className="about__note" src={sticky} alt="Note" />
      <img className="about__vector about__vector--tl" src={v0} alt="" />
      <img className="about__vector about__vector--mid" src={v1} alt="" />
      <img className="about__vector about__vector--rc" src={v2} alt="" />
      <img className="about__gate" src={gate} alt="India Gate" />
      <img className="about__group" src={group9} alt="Silhouettes" />
      <img className="about__img about__fm" src={fm} alt="Film Makers" />
      <img className="about__img about__be" src={be} alt="Branding Experts" />
      <img className="about__img about__ac" src={ac} alt="Art Curators" />
      <h2 className="about__headline">Take a closer look at the stories V bring to life.</h2>
      <a className="about__cta" href="#portfolio">View Portfolio</a>
    </section>
  );
}
