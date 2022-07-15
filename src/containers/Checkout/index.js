import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../hooks/useAppContext";
import "./Checkout.css";

function Checkout () {
    const { state: { cart }, removeFromCart } = useAppContext();

    const handleRemoveFromCart = (product) => () => {
        removeFromCart(product);
    };

    const sumTotal = cart.reduce(
        (accumulator, currentValue) => (accumulator + currentValue.price)
    , 0);

    return (
        <div className="Checkout">
            <div className="Checkout-content">
                <h3>{cart.length > 0 ? 'Lista de Pedidos:': 'No hay pedidos:'}</h3>
                {cart.map((product, index) => (
                    <div
                        className="Checkout-item"
                        key={`Product-${index}-${product.id}`}
                    >
                        <div className="Checkout-element">
                            <h4>{product.title}</h4>
                            <span>${product.price}</span>
                        </div>
                        <button
                            type="button"
                            onClick={handleRemoveFromCart(index)}
                        >
                            <i className="fas fa-trash-alt" />
                        </button>
                    </div>
                ))}
            </div>
            <div className="Checkout-sidebar">
                <h3>Precio Total: ${sumTotal}</h3>
                <Link to="/checkout/information">
                    <button
                        type="button"
                        disabled={cart.length === 0}
                    >
                        Continuar pedido
                    </button>
                </Link>
            </div>
        </div>
    );
};

export { Checkout };