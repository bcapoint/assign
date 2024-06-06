import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { GoPencil } from "react-icons/go";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Card = () => {
  return (
    <div className="card basis-1/5">
      <div className="img h-40  relative">
        <img
            src="/dress.jpeg"
            alt=""
            className="cardImg"
          />
        <span className="offLabel z-50  p-1 rounded">10% Off</span>
      </div>
      <div className="cardInfoContainer p-2 bg-white">
        <span className="label mustard">
          <span className="circle"></span>Mustard Yellow
        </span>
        <span className="label">Mutlipliar:5</span>
        <p className="text-xs text-gray-500 mt-2">Item Name</p>
        <h1 className="text-xs font-semibold">
          Mens white check shirt regular fit
        </h1>
        <p className="text-xs text-gray-500 mt-2">Design Number</p>
        <h1 className="text-xs mb-2">DN098234839</h1>
        <span className="label full">XL</span>
        <span className="label full">Instock:100</span>
        <div className="flex items-center justify-start gap-4 my-2">
          <span className="text-xs font-bold">₹ 799.67</span>
          <span className="text-xs font-semibold text-gray-400 line-through ">
            ₹ 1299.67
          </span>
        </div>

        <div className="flex items-center justify-start gap-3">
          <button className="border border-gray-100 px-2 py-1.5">
            <AiOutlineDelete />
          </button>
          <div className="text-xs font-bold flex items-center justify-between gap-2 bg-gray-200 ">
            {/* px-2 py-1.5  */}
            <div className="px-2 py-1.5 ">XL</div>
            <div>
              <span
                className="bg-white rounded "
                style={{
                  fontSize: "10px",
                  padding: "2px 5px",
                  borderRadius: "30px",
                }}
              >
                +5 More
              </span>
            </div>
            <div className="px-2 py-1.5 border-s border-gray-300">
              <GoPencil />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
