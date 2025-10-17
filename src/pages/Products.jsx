import React, { useEffect, useState } from "react";

export default function Products({products}) {
 

  return (
    <div className="w-full flex  items-center justify-center mx-20">
      <ul className=" list-none flex items-center justify-start gap-5 flex-wrap">
        {products?.length > 0 &&
          products.map((product) => {
            return (
              <li
                key={product.name}
                className="h-[500px] bg-white shadow-xl rounded-lg py-4 px-2 w-[400px]"
              >
                <div className="">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded"
                  />
                </div>

                <div className="mt-2">
                  <span className="">
                    <span className="text-black font-semibold ">Name :</span>{" "}
                    {product.name}
                  </span>{" "}
                  <br />
                  <span>
                    {" "}
                    <span className="text-black font-semibold ">
                      price :
                    </span>{" "}
                    {product.price}
                  </span>
                  <br />
                  <span>
                    {" "}
                    <span className="text-black font-semibold ">
                      Company Name :{" "}
                    </span>{" "}
                    {product.company_name}
                  </span>
                  <br />
                  <span>
                    {" "}
                    <span className="text-black font-semibold ">
                      Store :
                    </span>{" "}
                    {product.store}
                  </span>
                </div>
                <h2 className=" text-black font-semibold text-xl my-2">
                  {product.title}
                </h2>
                <p className="text-gray-700">{product.desccription}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
