import React from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'

const Pricing = () => {
    const packages = [
        { name: 'Free', price: 0, features: [true, true, true, true, false, false, false, false] },
        { name: 'Plus', price: 9, features: [true, true, true, true, true, true, true, false] },
        { name: 'Pro', price: 49, features: [true, true, true, true, true, true, true, true] }
    ]

    const featuresList = [
        "Single User",
        "5GB Storage",
        "Unlimited Public Access",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
        "Monthly Status Reports"
    ]
  return (
    <div className="md:px-14 max-w-s mx-auto py-10 bg-gradient-to-br from-blue-900 to-blue-300">
      {/* Pricing card */}
      <div className="grid sm: grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 md:w-11/12 mx-auto">
        {packages.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="px-8 py-6">
              <h4 className="text-1xl mb-2 uppercase text-slate-400 font-medium text-center">
                {item.name}
              </h4>
              <p className="mt-2 text-center text-slate-900 text-3xl font-bold">
                ${item.price}
                <span className="text-base font-light">/month</span>
              </p>
              <hr className="my-4" />
              <ul className="px-4 space-y-2">
                {featuresList.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`flex gap-2 items-center ${
                      item.features[idx] ? "" : "text-slate-400"
                    }`}
                  >
                    {item.features[idx] ? (
                      <CheckIcon className="size-4 text-green-500" />
                    ) : (
                      <XMarkIcon className="size-4 text-red-500" />
                    )}
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-center mt-4">
                <button className="w-full rounded-full bg-blue-500 text-white py-2 hover:bg-blue-600">
                  BUTTON
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing