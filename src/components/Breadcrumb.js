import React from "react";
import { CiHome } from "react-icons/ci";

const Breadcrumb = () => {
  return (
    <div className="flex items-center justify-between py-1 px-4">
        
      <div className="breadcrumbContainer">
        <div className="flex items-center py-0 overflow-x-auto whitespace-nowrap">
          <a href="/" className="flex items-center justify-center gap-3  text-sm ">
            <CiHome />
            Home
          </a>

          <span className="mx-5  text-sm">/</span>

          <a href="/" className=" text-sm">
            Account
          </a>

          <span className="mx-5  text-sm">/</span>

          <a href="/" className=" text-sm  font-semibold">
            Product Catalogue
          </a>
        </div>
      </div>

      <div className="placeOrderContainer">
        <button className="bg-custom-blue text-white px-8 py-1 rounded-sm text-xs uppercase font-semibold">Place Order</button>
      </div>

    </div>
  );
};

export default Breadcrumb;
