import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../hooks/useAppContext";
import "./Header.css";

function Header () {
    const { state: { cart } } = useAppContext();

    return (
        <header className="Header">
            <h1 className="Header-title">
                <Link to="/">
                    PlatziConf Merch
                </Link>
            </h1>
            <div className="Header-checkout">
                <Link to="/checkout">
                    <i className="fas fa-shopping-basket fa-2x"/>
                </Link>
                {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
            </div>
        </header>
    );
};

export { Header };