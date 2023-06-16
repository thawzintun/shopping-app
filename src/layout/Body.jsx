import React from "react";
import Card from "../components/Card";

const Body = () => {
    const fruits = [
        {
            id: 1,
            price: 10.98,
            name: "Banana",
            description: "Lorem ipsum dolor sit amet.",
        },
        {
            id: 2,
            price: 9.89,
            name: "Apple",
            description: "Lorem ipsum dolor sit amet.",
        },
        {
            id: 3,
            price: 12.49,
            name: "Kiwi",
            description: "Lorem ipsum dolor sit amet.",
        },
        {
            id: 4,
            price: 6.78,
            name: "Mango",
            description: "Lorem ipsum dolor sit amet.",
        },
        {
            id: 5,
            price: 5.99,
            name: "Orange",
            description: "Lorem ipsum dolor sit amet.",
        },
    ];
    return (
        <section className="body">
            {fruits.map((fruit) => (
                <Card key={fruit.id} fruit={fruit} />
            ))}
        </section>
    );
};

export default Body;
