import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonal = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  const data = [
    {
      name: "Rahul",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis...",
    },
    {
      name: "Rohit",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis...",
    },
    {
      name: "Aman",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis...",
    },
    {
      name: "Ayush",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis...",
    },
    {
      name: "Abhi",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis...",
    },
    {
      name: "Chaitanya",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis...",
    },
  ];

 return (
   <div className="w-full px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
      <Slider {...settings}>
        {data.map((t, index) => (
          <div key={index} className="p-4">
            <div className="bg-orange-50 rounded-lg p-6 shadow-md text-center">
              <p className="text-gray-700 mb-2">{t.text}</p>
              <h3 className="font-bold text-lg">{t.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default Testimonal
