import useItemStore from "@/app/Zustand/useItemStore";
import Image from "next/image";
import { useState } from "react";
import Modal from "../Modal/Modal";

const Productcart = ({ products }) => {
  const selectedOptions = useItemStore((state) => state.selectedOptions);
  const updateQuantity = useItemStore((state) => state.updateQuantity);
  const BASE_URL = "https://eda.yandex";

  const [selectedItem, setSelectedItem] = useState(null);
  const openModal = (item) => {
    setSelectedItem(item);
    const modal = document.getElementById("my_modal_4");
    if (modal) {
      modal.showModal();
    }
  };
  console.log(selectedItem);

  return (
    <div>
      <div className="mb-10 px-2 2xl:px-0">
        {products.categories.map((category) => (
          <div id={category.id} key={category.id} className="">
            {/* Category Header */}
            <h1 className="text-2xl font-bold my-4">{category.name}</h1>

            {/* render each category */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 2xl:px-0">
              {category.items.map((item) => {
                // Find the selected item in the state
                const selectedItem = selectedOptions.find(
                  (selected) => selected.itemId === item.id
                );

                return (
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
                        <div className="">
                          {selectedItem ? (
                            <div className="flex">
                              <button
                                onClick={() => updateQuantity(item.id, selectedItem.quantity - 1)}
                                disabled={selectedItem.quantity <= 1}
                                className="px-2 py-1 bg-[#f5f4f2] rounded-l-lg"
                              >
                                -
                              </button>
                              <span className="px-2 py-1 bg-[#f5f4f2] w-full text-center">
                                {selectedItem.quantity || 1}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, selectedItem.quantity + 1)}
                                className="px-2 py-1 bg-[#f5f4f2] rounded-r-lg"
                              >
                                +
                              </button>
                            </div>
                          ) : (
                            <button onClick={() => openModal(item)} className="btn btn-sm w-full">
                              + Add
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        <Modal selectedItem={selectedItem}></Modal>
      </div>
    </div>
  );
};

export default Productcart;
