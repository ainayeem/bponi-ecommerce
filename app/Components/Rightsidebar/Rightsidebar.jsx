import useItemStore from "@/app/Zustand/useItemStore";
import Image from "next/image";

const Rightsidebar = () => {
  const selectedOptions = useItemStore((state) => state.selectedOptions);
  const clearCart = useItemStore((state) => state.clearCart);
  console.log("rightsidebar", selectedOptions);
  return (
    <div className="">
      <div className="px-5 py-8">
        <div className="flex justify-between">
          <h1>Cart</h1>
          <button onClick={clearCart}>Clear</button>
        </div>
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
                <h2>{item.itemName}</h2>
                {/*  */}
                {item.selectedData.map((group) => (
                  <div key={group.groupId}>
                    {group.selectedOptions.map((option) => (
                      <p key={option.optionId} className="text-[10px] text-gray-500">
                        {option.optionName}
                      </p>
                    ))}
                  </div>
                ))}
                {/*  */}
                <p>Price: {item.price} ₸</p>
              </div>
              <div className="flex">
                <button className="px-2 py-1 bg-gray-400 text-white rounded-l-3xl">-</button>
                <span className="px-2 py-1 bg-gray-400 text-white">1</span>
                <button className="px-2 py-1 bg-gray-400 text-white rounded-r-3xl">+</button>
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
    </div>
  );
};

export default Rightsidebar;
