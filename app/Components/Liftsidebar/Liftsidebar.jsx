"use client";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

const Liftsidebar = ({ products }) => {
  // console.log("products", products.categories[0].name);

  const [catView, setCatView] = useState(0);
  useEffect(() => {
    if (products.categories.length > 0) {
      setCatView(products.categories[0].id);
    }

    const handleScroll = () => {
      const container = document.getElementById("food-body");
      const categoryIds = products.categories.map((category) => category.id);

      for (const id of categoryIds) {
        const categoryElement = document.getElementById(id);
        if (categoryElement) {
          const rect = categoryElement.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          if (rect.top >= containerRect.top && rect.top < containerRect.bottom) {
            setCatView(id);
            break;
          }
        }
      }
    };

    const container = document.getElementById("food-body");
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [products.categories]);

  const handleCategoryClick = (categoryId) => {
    setCatView(categoryId);

    const scrollDiv = document.getElementById(categoryId);
    const container = document.getElementById("food-body");

    if (scrollDiv && container) {
      if (window.screen.width > 1400) {
        container.scrollTop = scrollDiv.offsetTop - 118;
      } else {
        container.scrollTop = scrollDiv.offsetTop - 88;
      }
    }
  };

  return (
    <div className="px-5">
      <div className="">
        <button
          type="button"
          className="py-4 me-2 mb-2 text-lg font-semibold text-gray-900  bg-white rounded-xl hover:bg-gray-100 w-full px-4 flex gap-4 
        items-center"
        >
          <FaArrowLeft />
          <p>All restaurants</p>
        </button>
      </div>
      <div>
        <h1 className="px-2 text-lg font-semibold">Menu</h1>
        {products.categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`py-4 me-2 mb-2 text-lg font-semibold text-gray-900  hover:bg-white rounded-xl w-full text-start px-2 ${
              catView === category.id ? "bg-white" : ""
            }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            <p>{category.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Liftsidebar;
