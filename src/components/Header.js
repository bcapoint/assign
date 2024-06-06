import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { TbSquareArrowUp } from "react-icons/tb";
import { CgNotes, CgProfile } from "react-icons/cg";
import { RiNotification4Line } from "react-icons/ri";

const Header = () => {
  return (
    <div className="header flex items-center justify-between py-2 px-4 border-b border-white-bg">
      <div className="inputContainer px-2 py-2 border border-border-color text-sm relative basis-1/3">
        <div className="searchIconContain flex items-center justify-start gap-2 w-auto">
          <IoSearch className="text-primary" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search POs,ASNs, & Pages etc.."
            className="border-none bg-transparent outline-none basis-3/4"
          />
        </div>

        <div className="bg-gray-200 p-1 rounded text-xs font-semibold text-gray-500 absolute right-2 top-1.5">
          <span className="me-1">⌘+k </span>/
          <span className="ms-1">⌘+shift+k</span>
        </div>
      </div>
      <div className="menuContainer flex items-center justify-start gap-6 px-3">
        <div className="menu ">
          <ul className="flex items-center justify-start gap-6 text-xl text-gray-400">
            <li>
              <FaRegCircleQuestion />
            </li>

            <li>
              <TbSquareArrowUp />
            </li>

            <li className="relative">
              <CgNotes />
              <span className="badge rounded">20</span>
            </li>

            <li className="relative">
              <RiNotification4Line />
              <span className="badge rounded">120</span>
            </li>
          </ul>
        </div>
        <span className="divider"></span>
        <div className="userProfile flex items-center justify-center gap-2 flex-grow-0">
          <div className="profileIcon text-2xl bg-gray-500 text-white p-1 rounded-lg">
            <CgProfile />
          </div>
          <div className="userInfoContainer">
            <h1 className="font-semibold triangle-bottom">
              Vmart-Procurement Team
            </h1>
            <p className="text-sm text-primary">Ashish Kumar Singla</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
