import React from "react";
import "./Product.css";

function Product ({ product, handleAddtoCart }) {
    return (
        <div className="Product-item">
            <img
                src={product.image}
                atl={product.title}
            />
            <div className="Product-item-info">
                <h2>
                    {product.title}
                    <span>{` $${product.price}`}</span>
                </h2>
                <p>{product.description}</p>
            </div>
            <button
                type="button"
                onClick={handleAddtoCart(product)}
            >
                Comprar
            </button>
        </div>
    );
};

export { Product };