import React, { useState } from 'react';
import logo from './logo.svg'
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './Login.css';

import api from '../../services/api';
import Container from '../../components/Container'





const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', {
        formEmail: email,
        formPassword: password
      });

      localStorage.setItem('userId', response.data.id);
      localStorage.setItem('userName', response.data.name);
      history.push('/home');
    } catch (error) {
      alert('Erro no logon, tente novamente');
    }
  }

  return (
    <div id="page-login">
      <Container>
        <section className="header-container">
          <img src={logo} className="App-logo" alt="logo" />
          <p>O semestre mal começou e já esta sem grana?
          Dê um detachfy e ganhe dinheiro vendendo
                    materiais que não precisa mais!</p>
          <Link to="/register">
            <FiLogIn size={16} color="#1877F2" />
             Cadastre-se</Link>
        </section>
        <section className="logon-container">
          <form onSubmit={handleLogin} >
            <h1>Login</h1>
            <input
              type="email"
              placeholder="e-mail"
              value={email}
              onChange={e => setEmail(e.target.value)} />
            <input 
            type="password" 
            placeholder="password" 
            value={password}
            onChange={e => setPassword(e.target.value)} />
            <button type="submit">Login</button>
          </form>
        </section>

      </Container>

    </div>

  );
};

export default Login;