// eslint-disable-next-line no-unused-vars
import React from "react";
import img from "../../assets/1.png";

const Hero = () => {
  return (
    <div>
      <div className="container grid grid-cols-1 md:grid-cols-2 justify-centerite items-center py-20  ">
        <div className="flex flex-col gap-8">
          <h1 className="md:text-6xl sm:text-4xl text-3xl font-bold">
            Delicious Food Is Waiting For You
          </h1>
          <p className="text-gray-600">
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
            assumenda qui ipsam id officiis modi cumque minus dolores placeat
            explicabo.
          </p>
          <div className="flex gap-4">
            <button className="text-white font-bold bg-primary px-4 py-2 rounded-full">
              Food Menu
            </button>
            <button className=" font-bold bg-white px-4 py-2 rounded-full">
              Book Table
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={img} className="w-96 animate-spin-slow" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
