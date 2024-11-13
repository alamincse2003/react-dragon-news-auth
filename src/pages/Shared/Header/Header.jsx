import React from "react";
import logo from "../../../assets/logo.png";

import moment from "moment";

const Header = () => {
  return (
    <div className="w-1/2 mt-5 mx-auto text-center">
      <img src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p className="text-xl">
        {moment().format("dddd, MMMM D, YYYY")}
      </p>
    </div>
  );
};

export default Header;
