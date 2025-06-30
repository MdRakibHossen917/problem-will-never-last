import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex text-center  text-accent flex-col gap-3">
      <div className=" ">
        <img
          className=" mx-auto w-[400px] text-center"
          src={logo}
          alt="logo.png"
        />
      </div>
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="font-semibold text-accent">{format(new Date(), "EEEE, MMMM MM,	yyyy")} </p>
    </div>
  );
};

export default Header;
