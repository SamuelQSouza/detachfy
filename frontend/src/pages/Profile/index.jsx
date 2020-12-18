import React, { useEffect, useState } from 'react';
import { FiPower } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import logo from '../Login/logo.svg'
import Card from '../../components/Card'

import "./Profile.css";

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

  function handleDeleteItem(itemId){
    api.delete(`/product?id=${itemId}`, {headers: {seller: userId}})
    setProducts(products.filter(product => product.id !== itemId))
    
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
              <Link >atualizar</Link>
              <Link onClick={() =>handleDeleteItem(product.id)}>delete</Link>
            </Card>
            


            </>
        )

        )}


      </main>
    </div>

  );
};


export default Profile;