import React from "react";
import CartItem from "./CartItem";

const Cart = ({ hideCartHandler }) => {
    const fruits = [
        {
            id: 1,
            price: 10.98,
            name: "Banana",
            description: "Lorem ipsum dolor sit amet.",
            quantity: 3,
        },
        {
            id: 2,
            price: 9.89,
            name: "Apple",
            description: "Lorem ipsum dolor sit amet.",
            quantity: 1,
        },
        {
            id: 3,
            price: 12.49,
            name: "Kiwi",
            description: "Lorem ipsum dolor sit amet.",
            quantity: 5,
        },
    ];

    return (
        <section className="cart-box">
            <h2>Cart</h2>
            {fruits.map((fruit) => (
                <CartItem key={fruit.id} fruit={fruit} />
            ))}
            <hr />
            <div className="total">
                <h3>Total Price</h3>
                <p>$49.89</p>
            </div>
            <div className="btns">
                <button className="close-btn" onClick={hideCartHandler}>
                    Close
                </button>
                <button className="order-btn">Order</button>
            </div>
        </section>
    );
};

export default Cart;
