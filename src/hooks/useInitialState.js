import { useState } from "react";
import initialState from "../initialState";

function useInitialState () {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload],
        });
    };

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter((_, index) => index !== payload),
        });
    };

    const addToBuyer = (payload) =>  {
        setState({
            ...state,
            buyer: [...state.buyer, payload],
        });
    };

    const addNewOrder = (payload) => {
        setState({
            ...state,
            order: [...state.order, payload],
        });
    };

    return {
        state,
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder,
    };
};

export { useInitialState };