import React, { useEffect, useState } from "react";
import Card from "./Card";

const Paggination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setcurrentPage] = useState(0)

  const page_size = 9;

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products);
  };

  const totalproduct = products.length;
  const NoOfPage = Math.ceil(totalproduct / page_size);
  const start= currentPage * page_size
  const end = start + page_size

  const handelChange = (n) =>{
    setcurrentPage(n)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return !products.length ? (
    <div className="text-center mt-10 text-gray-600 text-xl">
      Products not found
    </div>
  ) : (
    <div className="">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Product List
      </h1>
      <div className="flex gap-3 justify-center m-6">
        {[...Array(NoOfPage).keys()].map((n) => (
          <span
            key={n}
            onClick={()=> handelChange(n)}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white cursor-pointer transition"
          >
            {n }
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.slice(start, end).map((p) => (
          <Card key={p.id} image={p.thumbnail} title={p.title} />
        ))}
      </div>
    </div>
  );
};

export default Paggination;
