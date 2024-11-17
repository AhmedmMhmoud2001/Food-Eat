// eslint-disable-next-line no-unused-vars
import React from "react";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import { FaStar } from "react-icons/fa";
const topList = [
  {
    id: 1,
    img: img3,
    title: "Food Name 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "10.99",
  },
  {
    id: 2,
    img: img4,
    title: "Food Name 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "10.99",
  },
  {
    id: 3,
    img: img5,
    title: "Food Name 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "10.99",
  },
];
const TopList = () => {
  return (
    <div>
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Top List</h2>
          <p>Our top list</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8">
          {topList.map((data) => (
            <div
              key={data.id}
              className="bg-white/50 p-5 lg:p-6 rounded-3xl hover:scale-110 transition duration-300 m-2 my-8"
            >
              <div className="flex justify-center">
                <img src={data.img} className="w-[250px] " alt="" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-1">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold">{data.title}</h3>
                <p className="text-gray-700">{data.description}</p>
                <span className="font-bold">{data.price}</span>
              </div>
            </div>
          ))}
          {/* card */}
        </div>
      </div>
    </div>
  );
};

export default TopList;
