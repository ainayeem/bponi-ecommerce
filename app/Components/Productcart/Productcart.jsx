import Image from "next/image";
import { useState } from "react";
import Modal from "../Modal/Modal";

const Productcart = ({ products }) => {
  const BASE_URL = "https://eda.yandex";

  const [selectedItem, setSelectedItem] = useState(null);
  const openModal = (item) => {
    setSelectedItem(item);
    const modal = document.getElementById("my_modal_4");
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <div>
      <div className="mb-10">
        {products.categories.map((category) => (
          <div id={category.id} key={category.id} className="">
            {/* Category Header */}
            <h1 className="text-2xl font-bold my-4">{category.name}</h1>

            {/* render each category */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {category.items.map((item) => (
                <div key={item.id} className="">
                  <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
                    <div className="flex items-center flex-col p-2">
                      <Image
                        src={`${BASE_URL}${item.picture.uri
                          .replace("{w}", "500")
                          .replace("{h}", "500")}`}
                        alt={item.name}
                        className="rounded-xl p-2 flex flex-col items-center justify-center object-cover pb-0"
                        width={500}
                        height={500}
                      />
                    </div>

                    <div className="p-3">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.price}₸
                      </h5>

                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {item.name}
                      </p>
                      {/* button */}
                      {/* <div className="bg-neutral-100 w-full h-fit py-1 px-3 rounded-xl flex items-center justify-between">
                        <button className="text-xl">-</button>
                        <button>0</button>
                        <button className="text-xl">+</button>
                      </div> */}
                      <div className="">
                        {/* <button>+ Add</button> */}
                        <button onClick={() => openModal(item)} className="btn btn-sm w-full">
                          + Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <Modal selectedItem={selectedItem}></Modal>
      </div>
    </div>
  );
};

export default Productcart;
