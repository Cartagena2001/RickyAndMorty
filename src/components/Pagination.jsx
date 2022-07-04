import React from "react";

const Pagination = ({prev, next, onPrevious, onNext}) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav>
      <ul className="flex justify-center mt-5 mb-10">
        {prev ? (
          <li className="px-5">
            <button
              onClick={handlePrevious}
              className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-gray-900 via-blue-500 to-pink-500"
            >
              Previous
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="px-5">
            <button
              onClick={handleNext}
              className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-gray-900 via-blue-500 to-pink-500"
            >
              Next{" "}
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};
export default Pagination;
