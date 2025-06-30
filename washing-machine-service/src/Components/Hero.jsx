import React from 'react';
import { Link } from 'react-router';

const Hero = () => {
    return (
      <section className="   bg-base-100 ">
        <div className="container flex flex-col justify-center lg:p-6 p-4 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center lg:p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="lg:text-5xl text-2xl font-bold leading-none sm:text-6xl">
              Home Appliances <span className="text-red-500">Repair</span>{" "}
              Services
            </h1>
          </div>
          <div className="flex items-center justify-center    lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://i.ibb.co.com/1tHNkR9R/pexels-tima-miroshnichenko-6195121.jpg"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-2xl shadow-2xl"
            />
          </div>
        </div>
        <div className="flex flex-col mb-2  lg:w-3/4  space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4 lg:justify-start">
          <Link
            to="/category"
            className="w-[70%] sm:w-1/2 md:w-[50%] px-6 py-2 text-base text-center font-semibold border rounded-2xl bg-blue-500 text-white hover:bg-blue-600 transition duration-300 mx-auto sm:mx-20"
          >
            Our Services
          </Link>
        </div>
      </section>
    );
};

export default Hero;