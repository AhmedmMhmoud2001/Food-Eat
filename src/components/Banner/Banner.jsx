// eslint-disable-next-line no-unused-vars
import React from "react";
import img from "../../assets/2.png";
const Banner = () => {
  return (
    <div>
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center py-8">
        <div>
          <img src={img} alt="img" />
        </div>
        <div className="p-4">
          <h2 className="font-bold text-4xl">Food Is Always Good</h2>
          <p className="text-gray-700 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            laboriosam vitae accusamus assumenda, nobis perferendis ducimus!
            Itaque similique, recusandae nulla
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
