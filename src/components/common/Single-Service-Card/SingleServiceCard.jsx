import React from 'react'
import "./SingleServiceCard.css"

const SingleServiceCard = ({image, title, description}) => {
  return (
    <div className="product-card">
      <img src={image} alt="product" />
      <div className="card-content">
        <div className="visible-content">
          <h2 className="visible-title">{title}</h2>
        </div>
        <div className="hidden-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleServiceCard