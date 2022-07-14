import React from "react";
import { Header, Footer } from "../";
import "./Layout.css";

function Layout ({ children }) {
    return(
        <div className="Main">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export { Layout };