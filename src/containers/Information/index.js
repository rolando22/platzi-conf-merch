import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../hooks/useAppContext";
import "./Information.css";

function Information () {
    const { state: { cart }, addToBuyers } = useAppContext();
    const form  = useRef(null);

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer = Object.fromEntries(formData);
        addToBuyers(buyer);
    };

    return (
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Información de contacto:</h2>
                </div>
                <div className="Information-form">
                    <form ref={form}>
                        <input type="text" placeholder="Nombre completo" name="name" />
                        <input type="text" placeholder="Correo electrónico" name="email" />
                        <input type="text" placeholder="Dirección" name="address" />
                        <input type="text" placeholder="Apto" name="apto" />
                        <input type="text" placeholder="Ciudad" name="city" />
                        <input type="text" placeholder="País" name="country" />
                        <input type="text" placeholder="Estado" name="state" />
                        <input type="text" placeholder="Código postal" name="cp" />
                        <input type="text" placeholder="Teléfono" name="phone" />
                    </form>
                </div>
                <div className="Information-buttons">
                    <div className="Information-back">
                        <Link to="/checkout">Regresar</Link>
                    </div>
                    <div className="Information-next">
                        <button onClick={handleSubmit}>Pagar</button>
                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido:</h3>
                {cart.map((product, index) => (
                    <div
                        className="Information-item"
                        key={`Product-${index}-${product.id}`}
                    >
                        <div className="Information-element">
                            <h4>{product.title}</h4>
                            <span>${product.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export { Information };