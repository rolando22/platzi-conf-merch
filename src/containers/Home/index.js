import React from "react";
import { useAppContext } from "../../hooks/useAppContext";
import { Products } from "../../components";

function Home () {
    const { state: { products } } = useAppContext();

    return (
        <Products products={products}/>
    );
};

export { Home };