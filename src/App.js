import "./index.css";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Breadcrumb from "./components/Breadcrumb.js";
import SummarySidebar from "./components/SummarySidebar.js";
import { IoSearch } from "react-icons/io5";
import { RiGalleryView2 } from "react-icons/ri";
import { MdOutlineTableRows } from "react-icons/md";
import { LuTableProperties } from "react-icons/lu";
import { TbZoomScan } from "react-icons/tb";
import { GrSettingsOption } from "react-icons/gr";
import Card from "./components/Card.js";
import { useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="appLayout bg-white-bg flex">
      <div className="sidebarConatiner w-16 bg-white border-r border-white-bg">
        <Sidebar />
      </div>
      <div className="contentArea bg-white-bg flex-grow">
        {/* header Area */}
        <div className="headerContainer bg-white">
          <Header />
          <Breadcrumb />
        </div>
        {/* end header area */}

        {/* body area */}
        <div className="bodyArea flex items-start justify-start gap-3 p-3 ">
          <div className="cartArea flex-grow">
            <div className="flex gap-3 items-center justify-between">
              <div className="flex basis-3/5 gap-3 justify-between items-center bg-white p-3">
                <div className="flex items-center justify-start gap-3">
                  <div className="inputContainer px-2 py-1 border border-border-color text-xs relative basis-1/3">
                    <div className="searchIconContain flex items-center justify-start gap-2 w-auto">
                      <IoSearch className="text-primary" />
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Search Products"
                        className="border-none bg-transparent outline-none basis-3/4"
                      />
                    </div>
                  </div>

                  <div className="inline-flex" role="group">
                    <button
                      type="button"
                      className="px-2 py-2 text-sm font-medium bg-black text-white"
                    >
                      <RiGalleryView2 />
                    </button>
                    <button
                      type="button"
                      className="px-2 py-2 text-sm font-medium bg-gray-100"
                    >
                      <MdOutlineTableRows />
                    </button>
                    <button
                      type="button"
                      className="px-2 py-2 text-sm font-medium bg-gray-100"
                    >
                      <LuTableProperties />
                    </button>
                  </div>
                </div>

                <div className="text-xs text-gray-500 font-medium">
                  <button className="border border-gray-300 px-2 py-1.5 mx-1">
                    Add Remarks
                  </button>
                  <button className="border border-gray-300 px-2 py-1.5 mx-1">
                    Show by: <span>Sizes</span>
                  </button>
                  <button className="border border-gray-300 px-2 py-1.5 mx-1">
                    +
                  </button>
                </div>
              </div>

              <div className=" flex-grow">
                <div className="flex items-center justify-between gap-1">
                  <div
                    className="flex items-center justify-between gap-3 bg-white px-3 py-2"
                    style={{ width: "100%" }}
                  >
                    <div className="inputContainer px-2 py-1 text-xs relative basis-1/3">
                      <div className="searchIconContain flex items-center justify-start gap-2 w-auto">
                        <TbZoomScan className="text-lg text-gray-400" />
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Search Products"
                          className="border-none bg-transparent outline-none basis-3/4"
                        />
                      </div>
                    </div>

                    <div className="inline-flex">
                      <button
                        type="button"
                        className="px-2 py-2 text-xs  bg-gray-300 text-black font-semibold"
                      >
                        Design No
                      </button>
                    </div>
                  </div>

                  <button className="bg-white px-3 py-3 mx-1 text-xl">
                    <GrSettingsOption />
                  </button>
                </div>
              </div>
            </div>

            <div className="my-3 flex items-start justify-start gap-4">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div
            className={`summarySidebarContainer p-3 transition-all duration-1000 ease-linear  ${
              isSidebarVisible
                ? "absolute z-40 right-0 top-0"
                : "xl:hidden xl:absolute xl:right-52"
              // absolute z-40 right-0
            }`}
          >
            <SummarySidebar />
          </div>
        </div>
        {/* end body area */}
      </div>

      {/* button for sidebar */}

      <button
        className="absolute right-0 top-1/4 bg-custom-blue text-white p-4 rounded-s-lg  z-50 hidden xl:block cursor-pointer"
        onClick={toggleSidebar}
      >
        <FaArrowRightArrowLeft />
      </button>
    </div>
  );
}

export default App;
