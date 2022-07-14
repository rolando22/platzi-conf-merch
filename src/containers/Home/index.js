import React from "react";
import { Products } from "../../components";
import initialState from "../../initialState";

function Home () {
    return (
        <Products products={initialState.products}/>
    );
};

export { Home };