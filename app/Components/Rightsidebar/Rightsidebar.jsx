import useItemStore from "@/app/Zustand/useItemStore";
import Image from "next/image";

const Rightsidebar = () => {
  const selectedOptions = useItemStore((state) => state.selectedOptions);
  const clearSelectedOptions = useItemStore((state) => state.clearSelectedOptions);
  const updateQuantity = useItemStore((state) => state.updateQuantity);
  // console.log("rightsidebar", selectedOptions);

  const totalAmount = selectedOptions.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <>
      {/* for mobile */}
      <div className="2xl:hidden">
        <div className="flex flex-col items-center justify-between space-y-2 w-full px-2 pb-2">
          {/* Delivery info */}
          <div className="flex items-center space-x-2 w-full mt-2">
            <div className="flex items-center justify-between h-6 bg-gray-200 rounded-full">
              <span>🚶</span>
            </div>
            <div className="text-green-500 font-medium text-sm">
              Delivery 0 ₸ <span className="text-gray-400 line-through">174 ₸</span>
            </div>
          </div>

          {/* Next button */}
          <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg text-lg w-full">
            <div className="flex justify-between items-center w-full">
              <span>40-50min</span>
              <span>Order</span>
              <span>{totalAmount} ₸</span>
            </div>
          </button>
        </div>
      </div>
      {/* for pc */}
      <div className="hidden 2xl:block">
        {selectedOptions.length === 0 ? (
          <div className="px-5 py-8 h-full">
            <h1>Cart</h1>
            <div className="flex flex-col items-center justify-center h-full">
              <Image
                src="/assets/images/no-item.svg"
                alt="Project Image"
                className=""
                width={70}
                height={70}
              />
              <p className="">Your cart is currently empty</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-between h-full">
            <div className="px-5 py-8">
              <div className="flex justify-between">
                <h1 className="font-semibold text-2xl">Cart</h1>
                <button onClick={clearSelectedOptions}>Clear</button>
              </div>
              <div className="h-[70vh] overflow-y-scroll thin-scrollbar">
                {selectedOptions.map((item) => (
                  <div key={item.itemId} className="grid grid-cols-3 justify-between mb-4 ">
                    <div className="col-span-1">
                      <Image
                        src={item.image}
                        alt={item.itemName}
                        width={70}
                        height={70}
                        className="rounded"
                      />
                    </div>
                    <div className="col-span-2 flex items-center justify-between">
                      <div>
                        <h2>{item?.itemName}</h2>
                        {/*  */}
                        {item.selectedData?.map((group) => (
                          <div key={group.groupId}>
                            {group.selectedOptions.map((option) => (
                              <p
                                key={option.optionId}
                                className="text-[10px] text-gray-500 leading-none"
                              >
                                {option.optionName}
                              </p>
                            ))}
                          </div>
                        ))}
                        {/*  */}
                        <p>Price: {item.price} ₸</p>
                      </div>
                      <div className="flex">
                        <button
                          onClick={() => updateQuantity(item.itemId, item.quantity - 1)}
                          // disabled={item.quantity <= 1}
                          className="px-2 py-1 bg-[#f5f4f2] rounded-l-3xl"
                        >
                          -
                        </button>
                        <span className="px-2 py-1 bg-[#f5f4f2]">{item.quantity || 1}</span>
                        <button
                          onClick={() => updateQuantity(item.itemId, (item.quantity || 1) + 1)}
                          className="px-2 py-1 bg-[#f5f4f2] rounded-r-3xl"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <hr />
                <div className="flex justify-between mt-">
                  <p>Service fee</p>
                  <p>115 ₸</p>
                </div>
              </div>
              <div className="">
                <hr />
                <div className="flex flex-col items-center justify-between space-y-2 w-full">
                  {/* Delivery info */}
                  <div className="flex items-center space-x-2 w-full mt-3">
                    <div className="flex items-center justify-between h-6 bg-gray-200 rounded-full">
                      <span>🚶</span>
                    </div>
                    <div className="text-green-500 font-medium text-sm">
                      Delivery 0 ₸ <span className="text-gray-400 line-through">174 ₸</span>
                    </div>
                  </div>

                  {/* Next button */}
                  <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg text-lg w-full">
                    <div className="flex justify-between items-center w-full">
                      <span>Next</span>
                      <span>{totalAmount} ₸</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Rightsidebar;
