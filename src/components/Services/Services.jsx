// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaMobileScreen } from "react-icons/fa6";
import { MdOutlineFastfood } from "react-icons/md";
import { MdFoodBank } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";

const Services = () => {
  return (
    <div>
      <div className="container pt-8">
        <div>
          <h2 className="text-3xl font-bold text-center"> Our Services</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 py-10">
          <div className="flex items-center gap-4 ">
            <FaMobileScreen className="text-2xl" />
            <span className="font-bold text-lg">Online Booking</span>
          </div>
          <div className="flex items-center gap-4 ">
            <MdOutlineFastfood className="text-2xl" />
            <span className="font-bold text-lg">Fast Food</span>
          </div>
          <div className="flex items-center gap-4 ">
            <MdFoodBank className="text-2xl" />
            <span className="font-bold text-lg">Food Bank</span>
          </div>
          <div className="flex items-center gap-4 ">
            <CiDeliveryTruck className="text-2xl" />
            <span className="font-bold text-lg">Delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
