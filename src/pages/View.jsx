import React from "react";
import Header from "../components/Header";

const View = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col mx-5">
        <div className="grid grid-cols-2 items-center h-screen">
          {/* Left Side: Image */}
          <div className="text-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0070/7032/articles/ecommerce_20shopping_20cart_4c343e41-1041-49d3-bca8-3d7d1aa06d90.png?v=1729263457"
              alt=""
              width={"350px"}
              height={"250px"}
              className="mx-auto"
            />
          </div>

          {/* Right Side: Product Details */}
          <div className="pl-10">
            {/* Product Information */}
            <div>
              <h3 className="font-bold">PID: id</h3>
              <h1 className="text-5xl font-bold">Title</h1>
              <h4 className="font-bold text-red-600 text-2xl">$260</h4>
              <h4>Brand: brand</h4>
              <h4>Category: category</h4>
              <p className="mt-4">
                <span className="font-bold">Description</span>: Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Proin nec feugiat lorem. Nullam
                tincidunt, purus nec volutpat bibendum, enim elit iaculis sapien, sed
                aliquam mauris elit nec ligula. Cras eget lacus ac justo sollicitudin
                scelerisque. Quisque sit amet leo nec augue dapibus dignissim. Mauris
                tincidunt, lectus vel fermentum tincidunt, lacus mi consequat elit.
              </p>
            </div>

            {/* Buttons Below Left-Aligned */}
            <div className="flex gap-4 mt-5">
              <button className="bg-blue-600 rounded text-white px-4 py-2">
                Add to wishlist
              </button>
              <button className="bg-green-600 rounded text-white px-4 py-2">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
