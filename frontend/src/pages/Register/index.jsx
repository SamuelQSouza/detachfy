import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';


import "./Register.css";

import api from '../../services/api';
import Container from '../../components/Container'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [ies, setIes] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      ies,
      password
    };

    const reponse = await api.post('user', data);
    try {
      alert(`Seu email de acesso: ${reponse.data.email}`);
      history.push('/');
    } catch (err) {
      alert('Erro no cadastro, tente novamente');
    }
  }





    return (
      <div id="page-register">
        <Container>

          <form className="form-container" onSubmit={handleRegister}>
            <input
              className="single-input"
              placeholder="Nome"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input
              className="single-input"
              placeholder="E-mail"
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              className="single-input"
              placeholder="Whatsapp"
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
            />

            <input
              className="single-input"
              placeholder="ies"
              value={ies}
              onChange={e => setIes(e.target.value)}
            />
            <input
              className="single-input"
              placeholder="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />


            <button type="submit" className="button">
              Cadastrar
          </button>
          </form>
          <section className="register-header">

            <h1>cadastro</h1>
            <p>
              Faça seu cadastro, entre na plataforma e se desfaça de materiais que não usa mais.
          </p>
            <Link className="back-link" to="/">
              <FiArrowLeft size={16} color="#1877F2" />
            Já tenho cadastro
          </Link>
          </section>
        </Container>
      </div>

    )
  }


export default Register
