import React from "react";
import Card from "./Card.jsx";

const CardData = [
  {
    title: "Gold Card",
    price: 499,
    features: [
      "Monthly access to fitness area.",
      "Training sessions on demand.",
      "Personal trainer on demand.",
      "Live classes on demand.",
    ],
    duration: 12,
  },
  {
    title: "Flexible Card",
    price: 899,
    features: [
      "Monthly access to fitness area.",
      "Training sessions on demand.",
      "Personal trainer on demand.",
      "Live classes on demand.",
    ],
    duration: 12,
    bgColor: "bg-gray-100",
  },
  {
    title: "Platinum Card",
    price: 1299,
    features: [
      "Monthly access to fitness area.",
      "Training sessions on demand.",
      "Personal trainer on demand.",
      "Live classes on demand.",
    ],
    duration: 12,
    bgColor: "bg-gray-100",
  },
];

const Services = () => {
  return( 
  <div  className="grid grid-cols-3 gap-6 p-10 pt-8">
    {CardData.map((card, index) =>(
      <Card key={index} {...card} />
    ))}
  </div>);
};

export default Services;
