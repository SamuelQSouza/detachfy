import React from "react";
import '../styles/pages/landing.css';

// import { FiArrowRight } from "react-icons/fi";
// import { Link } from "react-router-dom";

// import "../styles/pages/landing.css";

const Landing = () => {
  return (
      <div id="pageLanding">
          <div className="content-wraper">
              <section className="header">
                  <h1>Detachfy</h1>
                  <p>O semestre mal começou e já esta sem grana? Dê um detachfy e ganhe dinheiro vendendo materiais que não precisa mais!</p>
              </section>
              <section className="logon-container">
                  <form >
                      <input type="text"/>
                      <button>Login</button>
                  </form>
              </section>

          </div>

      </div>
    
  );
};

export default Landing;