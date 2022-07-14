import React from "react";
import "./Header.css";

function Header () {
    return (
        <header className="Header">
            <h1 className="Header-title">PlatziConf Merch</h1>
            <div className="Header-checkout">Chekout</div>
        </header>
    );
};

export { Header };