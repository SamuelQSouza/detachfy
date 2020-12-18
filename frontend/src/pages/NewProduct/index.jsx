import React, { useState } from 'react';
import { FiArrowLeft, FiPlus } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';


import "./NewProduct.css";

import api from '../../services/api';
import Container from '../../components/Container'

const NewProduct = () => {

  const [product, setProduct] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const history = useHistory();

  const userId = localStorage.getItem('userId');

  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();

    data.append("product_name", product);
    data.append("description", description);
    data.append("value", value);
    images.forEach((image) => {
      data.append("images", image);
    });

    await api.post("/product", data, {
      headers: {
        seller: userId
      }})

    alert("Cadastro realizado com sucesso!");

    history.push("/profile");
  };

  const handleSelectImages = (event) => {
    if (!event.target.files) return;
    

    const selectedImages = Array.from(event.target.files);
    console.log({selectedImages})
    
    
    
    

    setImages([...images,...selectedImages]);
    console.log({images});

    const selectedImagesPreview = selectedImages.map((image) => {
      return URL.createObjectURL(image);
    });

    setPreviewImages([...previewImages, selectedImagesPreview]);
    console.log({previewImages});
  };





  return (
    <div id="page-register">
      <Container>

        <form className="form-container" onSubmit={handleSubmit}>
          <input
            className="single-input"
            placeholder="Nome do produto"
            value={product}
            onChange={e => setProduct(e.target.value)}
          />
          <textarea
          
            id="about"
            maxLength={300}

            placeholder="descrição"

            required
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            className="single-input"
            placeholder="valor"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {previewImages.map((image) => {
                  return <img key={image} src={image} alt={name} />;
                })}

                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>

              <input
                className="image-input"              
                multiple
                onChange={handleSelectImages}
                type="file"
                id="image[]"
              />
            </div>

          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>

        <section className="register-header">

          <h1>Cadastro de produto</h1>
          <p> 
            Cadastre um produto e comece a receber ofertas de compradores 
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#1877F2" />
            Mudei de ideia
          </Link>
        </section>
      </Container>
    </div>

  )
}


export default NewProduct
