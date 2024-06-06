import React from 'react'
import { RiGroupLine, RiDiscountPercentLine } from "react-icons/ri";
import { GrLocationPin } from "react-icons/gr";


const SummarySidebar = () => {
    return (
        <div className="breifInfoContainer mb-36">
            <div className="flex items-start justify-start gap-3 bg-custom-gray px-4 py-2 my-3">
                <div className="pt-1">
                    <RiGroupLine />
                </div>
                <div className="">
                    <p className="text-xs text-gray-400">Customer</p>
                    <h2 className="text-xs font-semibold">SRG India Pvt Ltd</h2>
                </div>
            </div>

            <div className="flex items-start justify-start gap-3 bg-custom-gray px-4 py-2 my-3">
                <div className="pt-1">
                    <GrLocationPin className="rotate-90" />
                </div>
                <div className="">
                    <p className="text-xs text-gray-400">Delivery Location</p>
                    <h2 className="text-xs font-semibold">Gurugram-017838</h2>
                </div>
            </div>

            <div className="flex items-start justify-start gap-3 bg-custom-gray px-4 py-2 my-3">
                <div className="pt-1">
                    <GrLocationPin className="-rotate-90" />
                </div>
                <div className="">
                    <p className="text-xs text-gray-400">Dispatch Location</p>
                    <h2 className="text-xs font-semibold">Gurugram-017838</h2>
                </div>
            </div>

            <div className="text-center bg-custom-gray px-4 py-1 my-3 text-xs font-semibold text-gray-400 cursor-pointer">
                Show More
            </div>

            <div className="summaryDivider"></div>

            <h1 className="text-xs font-bold my-2 uppercase">Summary</h1>
            <div className="text-center bg-custom-gray px-4 py-1 my-3 text-xs font-semibold  cursor-pointer">
                #SO_DRAFT_00000017_2024
            </div>

            <div className="flex items-center justify-between my-3">
                <span className="text-xs">Total Quantity</span>
                <span className="text-xs font-semibold text-gray-500">21</span>
            </div>

            <div className="flex items-center justify-between my-3">
                <span className="text-xs">Total Items</span>
                <span className="text-xs font-semibold text-gray-500">7</span>
            </div>

            <div className="flex items-center justify-between my-3">
                <span className="text-xs">Order Quantity</span>
                <span className="text-xs font-semibold text-gray-500">21</span>
            </div>

            <div className="flex items-center justify-between my-3 bg-gray-100 p-3 rounded">
                <span className="text-xs">Total Bag Price</span>
                <span className="text-sm font-bold">₹ 23031.808</span>
            </div>

            <div className="summaryDivider"></div>
            <h1 className="text-xs font-bold my-2 uppercase">
                Price Breakup
            </h1>

            <div className="flex items-center justify-between my-3">
                <span className="text-xs">IGST</span>
                <span className="text-xs font-semibold text-gray-500">
                    ₹ 230.80
                </span>
            </div>

            <div className="flex items-center justify-between my-3">
                <span className="text-xs">CGST</span>
                <span className="text-xs font-semibold text-gray-500">
                    ₹ 230.80
                </span>
            </div>

            <div className="flex items-center justify-between my-3">
                <span className="text-xs">SGST</span>
                <span className="text-xs font-semibold text-gray-500">
                    ₹ 230.80
                </span>
            </div>

            <div className="flex items-center justify-between my-3">
                <span className="text-xs">CESS</span>
                <span className="text-xs font-semibold text-gray-500">
                    ₹ 0.00
                </span>
            </div>

            <div className="flex items-center justify-between my-3 bg-gray-100 py-2 px-3 rounded text-green-700">
                <span className="text-xs flex items-center justify-start gap-1">
                    <RiDiscountPercentLine className="text-sm" />
                    Discount
                </span>
                <span className="text-sm font-bold">₹ 690</span>
            </div>

            <div className="flex items-center justify-between my-3 bg-gray-100 p-3 rounded">
                <span className="text-xs">Total Amount</span>
                <span className="text-sm font-bold">₹ 23031.808</span>
            </div>
        </div>
    )
}

export default SummarySidebar