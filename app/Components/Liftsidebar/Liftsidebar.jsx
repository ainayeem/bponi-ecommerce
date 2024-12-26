"use client";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";

const Liftsidebar = ({ products }) => {
  // console.log("products", products.categories[0].name);
  const [activeBtn, setActiveBtn] = useState(null);

  const handleClick = (categoryId) => {
    setActiveBtn(categoryId);
  };

  return (
    <div className="px-5">
      <div className="">
        <button
          type="button"
          class="py-4 me-2 mb-2 text-lg font-semibold text-gray-900  bg-white rounded-xl hover:bg-gray-100 w-full px-4 flex gap-4 
        items-center"
        >
          <FaArrowLeft />
          <p>All restaurants</p>
        </button>
      </div>
      <div>
        <h1 className="px-2 text-lg font-semibold">Menu</h1>
        {products.categories.map((category) => (
          <ScrollLink
            key={category.id}
            to={category.id}
            smooth={true}
            className={`cursor-pointer py-4 me-2 mb-2 text-lg font-semibold text-gray-900  hover:bg-white rounded-xl w-full text-start px-2 flex flex-col ${
              activeBtn === category.id ? "bg-white" : ""
            }`}
            onClick={() => handleClick(category.id)}
          >
            {category.name}
          </ScrollLink>
        ))}
        <button
          type="button"
          class="py-4 me-2 mb-2 text-lg font-semibold text-gray-900  hover:bg-white rounded-xl w-full text-start px-2"
        >
          What's new
        </button>
      </div>
    </div>
  );
};

export default Liftsidebar;
