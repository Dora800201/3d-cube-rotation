import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-[#5299d8] flex items-center justify-center flex-col min-h-50 text-white">
      <h1>Unda Solutions</h1>
      <h2>Bespoke Web Application Development in Perth</h2>
      <Link
        to="/contact"
        className="border-2 rounded-xs m-3 p-1 cursor-pointer"
      >
        Contact us
      </Link>
    </div>
  );
};

export default HomePage;
