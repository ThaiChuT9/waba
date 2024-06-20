import React from "react";

const Productlist = () => {
  const ProductName = [
    { name: "Fancy Product", price1: 10, price2: 20 },
    { name: "Special Item", price1: 10, price2: 20 },
    { name: "Sale Item", price1: 10, price2: 20 },
    { name: "Popular Item", price1: 10, price2: 20 },
    { name: "Sale Item", price1: 10, price2: 20 },
    { name: "Fancy Product", price1: 10, price2: 20 },
    { name: "Special Item", price1: 10, price2: 20 },
    { name: "Popular Item", price1: 10, price2: 20 },
  ];

  const StarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-4 text-yellow-500"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clipRule="evenodd"
      />
    </svg>
  );
  return (
    <div className="md:px-28 max-w-s mx-auto py-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto">
        {ProductName.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden relative mx-5 flex flex-col justify-between"
          >
            {(item.name.toLowerCase().includes("sale") ||
              item.name.toLowerCase().includes("special")) && (
              <span className="absolute top-2 right-2 bg-black text-white px-2 py-1 text-xs rounded font-bold">
                Sale
              </span>
            )}
            <div className="bg-gray-200 h-48 flex items-center justify-center">
              {/* Placeholder for product image */}
              <span className="text-gray-500 text-4xl">Image</span>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2 text-center">
                {item.name}
              </h2>
              {(item.name.toLowerCase().includes("special") ||
                item.name.toLowerCase().includes("popular")) && (
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              )}
              <p className="text-center pb-8">
                {item.name.toLowerCase().includes("sale") ||
                item.name.toLowerCase().includes("special") ? (
                  <>
                    <span className="text-gray-500 line-through text-sm">
                      ${item.price1}.00
                    </span>
                    <span className="text-gray-700 text-lg ml-2">
                      ${item.price2}.00
                    </span>
                  </>
                ) : (
                  <>
                    ${item.price1}.00 - ${item.price2}.00
                  </>
                )}
              </p>
              <button className="block mx-auto my-4 px-6 py-2 border border-black hover:bg-black hover:text-white ">
                {item.name.toLowerCase().includes("fancy")
                  ? "View Options"
                  : "Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productlist;
