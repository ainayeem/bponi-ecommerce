"use client";
import useItemStore from "@/app/Zustand/useItemStore";
import Image from "next/image";
import { useState } from "react";

const Modal = ({ selectedItem }) => {
  const BASE_URL = "https://eda.yandex";
  const addSelectedOptions = useItemStore((state) => state.addSelectedOptions);
  //   console.log("selectedItem", selectedItem.optionsGroups[0].name);
  //   console.log("selectedItem", selectedItem?.picture.uri);

  //   select manage
  const [counterState, setCounterState] = useState({});

  if (!selectedItem) return null;

  const handleCheckboxChange = (groupId, optionId, isChecked) => {
    setCounterState((prev) => ({
      ...prev,
      [groupId]: {
        ...prev[groupId],
        [optionId]: isChecked ? { count: 0, enabled: true } : { count: 0, enabled: false },
      },
    }));
  };

  const handleRadioChange = (groupId, optionId) => {
    setCounterState((prev) => ({
      ...prev,
      [groupId]: {
        [optionId]: { count: 1, enabled: true },
      },
    }));
  };

  const increment = (groupId, optionId, maxSelected) => {
    setCounterState((prev) => {
      const groupCounters = prev[groupId] || {};
      const totalSelected = Object.values(groupCounters).reduce(
        (sum, item) => sum + (item.enabled ? item.count : 0),
        0
      );

      if (totalSelected < maxSelected && groupCounters[optionId]?.count < maxSelected) {
        return {
          ...prev,
          [groupId]: {
            ...groupCounters,
            [optionId]: {
              ...groupCounters[optionId],
              count: groupCounters[optionId].count + 1,
            },
          },
        };
      }
      return prev;
    });
  };

  const decrement = (groupId, optionId) => {
    setCounterState((prev) => {
      const groupCounters = prev[groupId] || {};
      if (groupCounters[optionId]?.count > 0) {
        return {
          ...prev,
          [groupId]: {
            ...groupCounters,
            [optionId]: {
              ...groupCounters[optionId],
              count: groupCounters[optionId].count - 1,
            },
          },
        };
      }
      return prev;
    });
  };

  const allGroupsSelected = () => {
    return selectedItem.optionsGroups.every((group) => {
      const groupCounters = counterState[group.id] || {};
      const selectedOptions = Object.values(groupCounters).filter((option) => option.enabled);
      return selectedOptions.length > 0;
    });
  };

  const handleAddClick = () => {
    const selectedData = selectedItem.optionsGroups.map((group) => {
      const groupCounters = counterState[group.id] || {};
      const selectedOptions = Object.entries(groupCounters)
        .filter(([_, option]) => option.enabled)
        .map(([optionId, option]) => ({
          optionId,
          count: option.count,
        }));

      return {
        groupId: group.id,
        groupName: group.name,
        selectedOptions,
      };
    });

    addSelectedOptions({
      itemId: selectedItem.id,
      itemName: selectedItem.name,
      price: selectedItem.price,
      image: `${BASE_URL}${selectedItem?.picture.uri.replace("{w}", "500").replace("{h}", "500")}`,
      selectedData: selectedItem.optionsGroups.map((group) => ({
        groupId: group.id,
        groupName: group.name,
        selectedOptions: group.options
          .filter((option) => counterState[group.id]?.[option.id]?.enabled)
          .map((option) => ({
            optionId: option.id,
            optionName: option.name, // Include the option name
            count: counterState[group.id]?.[option.id]?.count || 0,
          })),
      })),
    });

    // console.log("Saved data:", {
    //   itemId: selectedItem.id,
    //   itemName: selectedItem.name,
    //   price: selectedItem.price,
    //   image: selectedItem.image,
    //   selectedData,
    // });
  };

  return (
    <>
      <dialog id="my_modal_4" className="modal" style={{ zIndex: 999 }}>
        <div className="modal-box max-w-7xl thin-scrollbar">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className="flex 2xl:gap-10">
            <div>
              <Image
                src={`${BASE_URL}${selectedItem?.picture.uri
                  .replace("{w}", "500")
                  .replace("{h}", "500")}`}
                alt={selectedItem?.name}
                className="rounded-xl p-2 flex flex-col items-center justify-center object-cover pb-0"
                width={500}
                height={500}
              />
            </div>
            <div className="w-full">
              <h1 className="font-extrabold 2xl:text-3xl pb-4">
                {selectedItem ? selectedItem.name : "No Selected"}
              </h1>
              <div className="flex gap-10 pb-5">
                <h3 className="font-bold 2xl:text-3xl pb-4">
                  {selectedItem ? selectedItem.price : "No Selected"} ₸
                </h3>
                <button
                  onClick={handleAddClick}
                  disabled={!allGroupsSelected()}
                  className="btn btn-warning text-gray-800 w-40"
                >
                  Add
                </button>
              </div>
              <div className="">
                {/* select manage  */}
                {selectedItem.optionsGroups.map((group) => (
                  <div key={group.id}>
                    <div className="flex justify-between items-center border-t-2">
                      <h2 className="2xl:text-xl text-lg py-4">{group.name}</h2>
                      <p className="text-red-500">
                        {group.maxSelected > 1 ? `Choose ${group.maxSelected}` : ""}
                      </p>
                    </div>

                    {group.options.map((option) => (
                      <div key={option.id} className="flex justify-between items-center">
                        <p className="2xl:text-base pb-4">{option.name}</p>
                        <div className="flex items-center">
                          {counterState[group.id]?.[option.id]?.enabled &&
                            group.maxSelected > 1 && (
                              <div className="flex items-center mr-4">
                                <button
                                  className="px-2 py-1 bg-gray-400 text-white rounded-l-lg"
                                  onClick={() => decrement(group.id, option.id)}
                                  disabled={counterState[group.id]?.[option.id]?.count <= 1}
                                >
                                  -
                                </button>
                                <span className="px-2 py-1 bg-gray-400 text-white">
                                  {counterState[group.id]?.[option.id]?.count || 0}
                                </span>
                                <button
                                  className="px-2 py-1 bg-gray-400 text-white rounded-r-lg"
                                  onClick={() => increment(group.id, option.id, group.maxSelected)}
                                  disabled={
                                    Object.values(counterState[group.id] || {}).reduce(
                                      (sum, item) => sum + (item.enabled ? item.count : 0),
                                      0
                                    ) >= group.maxSelected
                                  }
                                >
                                  +
                                </button>
                              </div>
                            )}
                          {group.maxSelected > 1 ? (
                            <input
                              type="checkbox"
                              name={`checkbox-${group.id}-${option.id}`}
                              className="checkbox checkbox-warning ml-4"
                              onChange={(e) =>
                                handleCheckboxChange(group.id, option.id, e.target.checked)
                              }
                            />
                          ) : (
                            <input
                              type="radio"
                              name={`radio-${group.id}`}
                              className="radio radio-warning"
                              onChange={() => handleRadioChange(group.id, option.id)}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="py-4 border-t-2">{selectedItem.description}</p>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
