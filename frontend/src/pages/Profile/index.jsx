import React, { useEffect, useState } from 'react';

import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import "./Profile.css";

import logo from '../Login/logo.svg'

import Card from '../../components/Card'


const Profile = () => {

  const [products, setProducts] = useState([]);

  const history = useHistory();

  const userName = localStorage.getItem('userName');
  const userId = localStorage.getItem('userId');
  console.log( userId
    )

  const [firstName] = userName.split(' ')

  useEffect(async () => {
    if (userName && userId) {     
        const { data } = await api.get(`/product/${userId}`)
        console.log(data);
        
        setProducts(data);

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
          <Link to='/profile/new'>new</Link>
          <Link onClick={() => handleLogout()}><FiPower></FiPower></Link>
        </div>

      </header>
      <p>Bem vindo {firstName.toLowerCase()},</p>
      <main className="">

        {products && products.map(product => (
          <>
          <Card
            id={product.id}
            image={product.images[0]}
            product_name={product.product_name}
            description={product.description}
            price={product.value}
            seller={product.seller}>
              <Link onClick={() => console.log("foi")}>atualizar</Link>
              <Link onClick={() => console.log("foi")}>delete</Link>
            </Card>
            


            </>
        )

        )}


      </main>
    </div>

  );
};


export default Profile;