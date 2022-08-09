import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "../../context/AppContext";

function ProvideMock ({ children }) {
    return (
        <AppProvider>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </AppProvider>
    );
};

export { ProvideMock };