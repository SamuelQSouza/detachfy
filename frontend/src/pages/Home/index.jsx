import React from "react";
import "./Home.css";
import logo from '../Login/logo.svg'
// import { FiArrowRight } from "react-icons/fi";
// import { Link } from "react-router-dom";

// import "../styles/pages/landing.css";

const Home = () => {
  return (
    <div className="page-home">
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </main>
    </div>
    
  );
};


export default Home;