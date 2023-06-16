import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import BackDrop from "../components/BackDrop";

const Main = () => {
    const [showCart, setShowCart] = useState(false);

    const showCartHandler = () => {
        setShowCart(true);
    };
    const hideCartHandler = () => {
        setShowCart(false);
    };

    return (
        <section>
            <Header showCartHandler={showCartHandler} />
            <Body />
            {showCart && <BackDrop hideCartHandler={hideCartHandler} />}
        </section>
    );
};

export default Main;
