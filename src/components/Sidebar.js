// import '../index.css'
import React from "react";
import { RiHome7Line, RiGroupLine } from "react-icons/ri";
import { IoShirtOutline, IoCalendarClearOutline } from "react-icons/io5";
import {
  BsCart2,
  BsTruck,
  BsBox,
  BsDatabase,
  BsReceiptCutoff,
} from "react-icons/bs";

import { TbClipboardList } from "react-icons/tb";
import { HiOutlinePresentationChartLine } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="sidebar py-4 px-3">
      <div className="flex align-middle justify-center mb-10">
        <img src="/logo.png" alt="" />
      </div>
      <div className="sidebarOption flex justify-center">
        <ul>
          <li className="block my-4 p-3 rounded-xl bg-custom-light-blue text-custom-blue text-2xl cursor-pointer transition-all duration-500 hover:text-custom-light-blue hover:bg-custom-blue">
            <RiHome7Line />
          </li>

          <li className="block my-4 p-3 rounded-xl  text-gray-400 text-2xl cursor-pointer transition-all duration-500 hover:text-custom-light-blue hover:bg-custom-blue">
            <IoShirtOutline />
          </li>

          <li className="block my-4 p-3 rounded-xl  text-gray-400 text-2xl cursor-pointer transition-all duration-500 hover:text-custom-light-blue hover:bg-custom-blue" >
            <BsCart2 />
          </li>

          <li className="block my-4 p-3 rounded-xl  text-gray-400 text-2xl cursor-pointer transition-all duration-500 hover:text-custom-light-blue hover:bg-custom-blue" >
            <IoCalendarClearOutline />
          </li>

          <li className="block my-4 p-3 rounded-xl  text-gray-400 text-2xl cursor-pointer transition-all duration-500 hover:text-custom-light-blue hover:bg-custom-blue" >
            <BsTruck />
          </li>

          <li className="block my-4 p-3 rounded-xl  text-gray-400 text-2xl cursor-pointer transition-all duration-500 hover:text-custom-light-blue hover:bg-custom-blue" >
            <BsBox />
          </li>

          <li className="block my-4 p-3 rounded-xl  text-gray-400 text-2xl cursor-pointer transition-all duration-500 hover:text-custom-light-blue hover:bg-custom-blue" >
            <BsDatabase />
          </li>

          <li className="block my-4 p-3 rounded-xl  text-gray-400 text-2xl cursor-pointer transition-all duration-500 hover:text-custom-light-blue hover:bg-custom-blue" >
            <RiGroupLine />
          </li>

          <li className="block my-4 p-3 rounded-xl  text-gray-400 text-2xl cursor-pointer transition-all duration-500 hover:text-custom-light-blue hover:bg-custom-blue" >
            <BsReceiptCutoff />
          </li>

          <li className="block my-4 p-3 rounded-xl  text-gray-400 text-2xl cursor-pointer transition-all duration-500 hover:text-custom-light-blue hover:bg-custom-blue" >
            <TbClipboardList />
          </li>
          <li className="block my-4 p-3 rounded-xl  text-gray-400 text-2xl cursor-pointer transition-all duration-500 hover:text-custom-light-blue hover:bg-custom-blue" >
            <HiOutlinePresentationChartLine />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
