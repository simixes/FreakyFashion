import React from "react";
import '../Global/Style.css';

function Hero() {

    return (
        <section className="hero">
            <div className="hero-item" id="hero-img">
                <img src="/images/Products/hero-img.jpg" alt="placeholder" />
            </div>
            <div className="hero-item" id="hero-text">
              <h1>Upptäck stilens hjärta från FreakyFashion!</h1>
              <p>
                Våra kollektioner kombinerar modern elegans med tidlös design, perfekt för dig som vill sticka ut.
                Utforska premiumkvalitet och exklusiva plagg, inspirerade av storstadens pulserande energi.
                Välkommen till din nya garderob, där varje plagg speglar självsäkerhet och sofistikering.
              </p>
            </div>
        </section>
    );
}

export default Hero;