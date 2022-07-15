import React from "react";
import { Product } from "../";
import { useAppContext } from "../../hooks/useAppContext";
import "./Products.css";

function Products () {
    const { state: { products }, addToCart } = useAppContext();

    const handleAddtoCart = (product) => () => {
        addToCart(product);
    };

    return (
        <div className="Products">
            <div className="Products-items">
                {products.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                        handleAddtoCart={handleAddtoCart}
                    />
                ))}
            </div>
        </div>
    );
};

export { Products };