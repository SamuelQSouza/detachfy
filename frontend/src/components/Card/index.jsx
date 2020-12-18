import React from 'react'
import './Card.css'


export default function Card(props) {
  return (
    <div className="card"
      key={props.id}

    >
      <div className="img-container">
        <img src={props.image.url} alt="" />
      </div>
      <div className="info-container">
        <h3>{props.product_name}</h3>
        <p className="description">{props.description}</p>
        <p className="value">R$ {props.price}</p>
        <p className="university">{props.seller.university}</p>
        {props.children}

        


      </div>
    </div>
  )
}