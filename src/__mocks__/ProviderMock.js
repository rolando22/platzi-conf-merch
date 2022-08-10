import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "../components";
import { AppProvider } from "../context/AppContext";

function ProvideMock (props) {
    return (
        <AppProvider>
            <BrowserRouter>
                <Layout>
                    {props.children}
                </Layout>
            </BrowserRouter>
        </AppProvider>
    );
};

export default ProvideMock;