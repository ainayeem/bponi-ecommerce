"use client";
import Image from "next/image";
import { CiBookmark } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import { GiFoodTruck, GiInfo } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";
import Productcart from "../Productcart/Productcart";
const BASE_URL = "https://eda.yandex";
const Middlebar = ({ products }) => {
  // console.log("products middlebar", products.categories[0].items[0].picture.uri);

  return (
    <div id="food-body" className="h-[95vh] overflow-y-scroll scroll-smooth scrollbar-hidden">
      {/* banner */}
      <div className="2xl:rounded-[50px] overflow-hidden">
        <div
          className=""
          style={{
            backgroundImage: `url('https://eda.yandex/images/3378693/049e8232c93c3ce2b19dc94a1da9ba26-1100x825.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="2xl:pt-44 pt-8 pb-12 px-12"
            style={{
              background: "linear-gradient(231.36deg, rgba(26, 0, 0, 0) 35.77%, #1A0000 90.7%)",
              opacity: 0.66,
            }}
          >
            <div className="2xl:hidden flex justify-between pb-6">
              <div className="bg-white rounded-full p-2">
                <FaArrowLeft />
              </div>
              <div className="">
                <div className="flex gap-2">
                  <span className="bg-white rounded-full p-2">
                    <CiBookmark />
                  </span>
                  <span className="bg-white rounded-full p-2">
                    <IoIosSearch />
                  </span>
                </div>
              </div>
            </div>
            <h1 className="text-white 2xl:text-5xl text-3xl font-semibold my-5">
              KFC Dostyk Plaza
            </h1>
            <div className="flex gap-4">
              <div className="bg-[rgba(255,255,255,1)] rounded-xl flex text-black text-2xl gap-3 px-4 items-center">
                <span>
                  <GiFoodTruck />
                </span>
                <div>
                  <p className="flex flex-col">
                    25-35 <span className="text-sm text-gray-500">min</span>
                  </p>
                </div>
              </div>
              <div className="bg-[rgba(255,255,255,0.95)] rounded-xl flex text-black text-2xl gap-3 px-4 items-center">
                <span>
                  <IoStarSharp />
                </span>
                <div>
                  <p className="flex flex-col">
                    4.1 <span className="text-sm text-gray-500">200+</span>
                  </p>
                </div>
              </div>
              <div className="bg-[rgba(255,255,255,0.78)] rounded-xl flex text-black text-2xl gap-3 px-4 items-center">
                <span>
                  <GiInfo />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* free delivery */}
      <div className="px-3 2xl:px-0">
        <div className="group bg-[#e4f2dc] rounded-3xl flex items-center my-12">
          <Image
            src="/assets/images/free-delivery.png"
            alt="Project Image"
            className=""
            width={70}
            height={70}
          />

          <p className="text-[#81b465] text-xl">Free delivery – on any order</p>

          {/* Small div that appears on hover */}
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 p-6 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-2xl font-semibold">Free delivery</h1>
            <p>on any order</p>
          </div>
        </div>
      </div>
      {/* cart item */}
      <Productcart products={products} />
    </div>
  );
};

export default Middlebar;
