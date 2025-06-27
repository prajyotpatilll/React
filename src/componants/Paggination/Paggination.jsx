import React, { useEffect, useState } from "react";
import Card from "./Card";
import PageNum from "./PageNum";
import { page_size } from "./Constant";

const Paggination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setcurrentPage] = useState(0);

  const fetchData = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products?limit=500");
      const json = await data.json();
      setProducts(json.products);
      
    } catch (error) {
      console.log(error);
    }
  };

  const totalproduct = products.length;
  const NoOfPage = Math.ceil(totalproduct / page_size);
  const start = currentPage * page_size;
  const end = start + page_size;

  const handelChange = (n) => {
    setcurrentPage(n);
  };

  useEffect(() => {
    fetchData();
    
  }, []);

  return !products.length ? (
    <div className="text-center mt-10 text-gray-600 text-xl">
      <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent align-[-0.125em]"></div>
      <div className="mt-4">Loading...</div>
    </div>
  ) : (
    <div className="">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Product List
      </h1>
      <PageNum
        currentPage={currentPage}
        handelChange={handelChange}
        NoOfPage={NoOfPage}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.slice(start, end).map((p) => (
          <Card key={p.id} image={p.thumbnail} title={p.title} />
        ))}
      </div>
    </div>
  );
};

export default Paggination;
