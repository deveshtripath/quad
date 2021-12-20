import React from 'react'
import "./Product.css"

function Product({ id, name, image, language, genres }) {
    

    return (
        <div className="product">
            <div className="image">
            <img width="600px" height="400px" src={image} alt="" />
            
            <div className="product__info">
                <p>movie name-{name}</p>
                <strong>language-{language} </strong>
                    <strong>genres-{genres} </strong>
                
            </div>
            
            </div>
            
        </div>
    )
}

export default Product
