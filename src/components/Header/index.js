import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header () {
    return (
        <header className="Header">
            <h1 className="Header-title">
                <Link to="/">
                    PlatziConf Merch
                </Link>
            </h1>
            <div className="Header-checkout">
                <Link to="/checkout">
                    Chekout
                </Link>
            </div>
        </header>
    );
};

export { Header };