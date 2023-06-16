import React, { useContext, useState } from "react";
import { itemContext } from "../store/ItemContext";

const Card = ({ fruit }) => {
    const { id, name, description, price } = fruit;
    const { addItem } = useContext(itemContext);
    const [currentAmount, setCurrentAmount] = useState(1);
    const currentAmountNumber = +currentAmount;

    const addToCartHandler = () => {
        addItem({
            id,
            name,
            price,
            amount: currentAmountNumber,
        });
    };
    return (
        <div className="card">
            <div>
                <p className="card-title">{name}</p>
                <p className="card-description">{description}</p>
                <p className="card-price">${price}</p>
            </div>
            <div className="card-right">
                <input
                    type="number"
                    className="card-input"
                    min={1}
                    max={5}
                    value={currentAmount}
                    onChange={(e) => setCurrentAmount(e.target.value)}
                />
                <button className="card-button" onClick={addToCartHandler}>
                    + Add
                </button>
            </div>
        </div>
    );
};

export default Card;
