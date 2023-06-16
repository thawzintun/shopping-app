import React from "react";
import Cart from "./Cart";

const BackDrop = ({ hideCartHandler }) => {
    return (
        <section className="backdrop">
            <Cart hideCartHandler={hideCartHandler} />
        </section>
    );
};

export default BackDrop;
