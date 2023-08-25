import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsChevronDown } from "react-icons/bs";
import {
  setSortBy,
  selectSortBy,
  resetSortBy,
} from "../../redux/sortSlice/sortSlice"

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const dispatch = useDispatch(); // dispatch işlemlerini yapmak için.  
  const sortBy = useSelector(selectSortBy); // mevcut olan sıralamayı alması için. 

  const options = [
    { id: 1, label: "Sort by new", value: "newest" },
    { id: 2, label: "Sort by old", value: "oldest" },
    { id: 3, label: "Sort randomly", value: "random" },
  ];

  useEffect(() => {
    dispatch(resetSortBy());
  }, [dispatch]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
    dispatch(setSortBy(option.value));
  };

  return (
    <>
   <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex justify-between items-center w-40 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption || "Select an option"}
        <BsChevronDown className="-mr-1 ml-2 h-5 w-5" />
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option) => (
              <button
                key={option.id}
                className={`${
                  selectedOption === option.label ? "bg-gray-100 text-gray-900" : "text-gray-700"
                } block w-full px-4 py-2 text-sm text-left`}
                role="menuitem"
                onClick={() => handleOptionSelect(option)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Dropdown;
