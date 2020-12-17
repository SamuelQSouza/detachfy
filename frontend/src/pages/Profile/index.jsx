import React, { useEffect, useState } from 'react';

import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import "./Home.css";

import logo from '../Login/logo.svg'


const Home = () => {

  const [products, setProducts] = useState([]);

  const history = useHistory();

  const userName = localStorage.getItem('userName');
  const userId = localStorage.getItem('userId');

  const [firstName] = userName.split(' ')

  useEffect(() => {
    if (userName && userId) {
      api
        .get('product')
        .then(response => {
          console.log(response);
          setProducts(response.data);
          console.log(products);
          
        });

    } else {
      history.push('/')

    }

  }, [userId]);



  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }


  return (
    <div className="page-home">
      <header className="header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <div className="button-container">
          <button>new</button>
          <button><FiPower></FiPower></button>
        </div>

      </header>
      <p>Bem vindo {firstName.toLowerCase()},</p>
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