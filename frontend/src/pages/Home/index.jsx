import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom'

import api from '../../services/api';

import "./Home.css";

import logo from '../Login/logo.svg'


const Home = () => {

  const [products, setProducts] = useState([]);





  useEffect(async() => {
    const {data}= await api.get('/product')
    setProducts(data);
    
    
    



  }, []);








  return (
    <div className="page-home">
      <header className="header">

        <img src={logo} className="App-logo" alt="logo" />
        <div className="button-container">
          <Link  to="/login">Login</Link>
          

        </div>

      </header>
      <main className="">

        {products && products.map(product => (
          <div className="card"
           key={product.id}
          
          >
            <div className="img-container">
              <img src={product.images[0].url} alt="" />
            </div>
            <div className="info-container">
              <h3>{product.product_name}</h3>
              <p>{product.description}</p>
              <p>{product.value}</p>
              <p>{product.seller.university}</p>


            </div>
          </div>
        )

        )}


      </main>
    </div >

  );
};


export default Home;