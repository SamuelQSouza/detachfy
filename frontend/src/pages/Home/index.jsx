import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import api from '../../services/api';
import logo from '../Login/logo.svg'
import Card from '../../components/Card'

import "./Home.css";



const Home = () => {

  const [products, setProducts] = useState([]);





  useEffect(async () => {
    const { data } = await api.get('/product')
    setProducts(data);






  }, []);








  return (
    <div className="page-home">
      <header className="header">

        <img src={logo} className="App-logo" alt="logo" />
        <div className="button-container">
          <Link to="/login">Login</Link>


        </div>

      </header>
      <main >

        {products && products.map(product => (
          
          <Card
            id={product.id}
            image={product.images[0]}
            product_name={product.product_name}
            description={product.description}
            price={product.value}
            seller={product.seller}>
              <Link onClick={() => console.log("foi")}>contatar vendedor</Link>
            </Card> 

        )

        )}


      </main>
    </div >

  );
};


export default Home;