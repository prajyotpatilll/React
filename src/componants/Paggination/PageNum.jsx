import React from 'react'

const PageNum = ({currentPage,handelChange,NoOfPage}) => {
  return (
    <div>
      <div className="flex gap-3 justify-center m-6">
        {currentPage > 0 ? (
          <div
            onClick={() => handelChange(currentPage - 1)}
            className="flex items-center justify-center border-2 border-black p-1 cursor-pointer"
          >
            Previous
          </div>
        ) : (
          <div className="flex items-center justify-center p-1 "> </div>
        )}
        {[...Array(NoOfPage).keys()].map((n) => (
          <span
            key={n}
            onClick={() => handelChange(n)}
            className={`px-4 py-2 rounded-md cursor-pointer transition 
      ${
        currentPage === n
          ? "bg-blue-500 text-white"
          : "bg-gray-200 hover:bg-blue-500 hover:text-white"
      }`}
          >
            {n}
          </span>
        ))}
        {currentPage < NoOfPage - 1 ? (
          <div
            onClick={() => handelChange(currentPage + 1)}
            className="flex items-center justify-center border-2 border-black p-1 cursor-pointer"
          >
            Next
          </div>
        ) : (
          <div className="flex items-center justify-center"></div>
        )}
      </div>
    </div>
  )
}

export default PageNum
