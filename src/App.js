import React from "react";

import "./App.css";

export default function App() {
  const results = [
    {
      name: "Original Cheese & Tomato",
      img:
        "https://www.dominos.co.uk/Content/images/Products/GB/Pizza/256x256/cheese-and-tomato-20170704.jpg",
      review: "Mamma mia, that's a good pizza!",
      rating: 5
    },
    {
      name: "Pepperoni Passion",
      img:
        "https://www.dominos.co.uk/Content/images/Products/GB/Pizza/256x256/pepperonipassion-20170704.jpg",
      review: "Meaty, but meh-ty.",
      rating: 3
    },
    {
      name: "Texas BBQ",
      img:
        "https://www.dominos.co.uk/Content/images/Products/GB/Pizza/256x256/texasbbq-20170704.jpg",
      review: "What in tarnation is this?!",
      rating: 2
    }
  ];

  return (
    <div className="container">
      <h1>Domino's REACTions</h1>
      <div className="pizzas">
        {results.map(result => (
          <div className="pizza">
            <h3>{result.name}</h3>
            <img src={result.img} alt={result.name} />
            <p>{result.review}</p>
            <p>{`⭐`.repeat(result.rating)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
