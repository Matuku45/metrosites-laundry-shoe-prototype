import React from "react";
import { motion } from "framer-motion";

export default function PricingCard({ title, icon: Icon, price, description, features }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition duration-300 flex flex-col justify-between"
    >
      {/* Icon and Title */}
      <div className="text-center mb-4">
        <div className="mx-auto bg-red-100 text-red-600 w-14 h-14 flex items-center justify-center rounded-full mb-3">
          <Icon className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>

      {/* Price */}
      <div className="text-center mb-6">
        <h4 className="text-3xl font-bold text-red-600">{price}</h4>
        <span className="text-gray-500 text-sm">per item / load</span>
      </div>

      {/* Features */}
      <ul className="text-gray-600 text-sm space-y-2 mb-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="btn bg-red-600 border-none text-white hover:bg-red-700 w-full mt-auto"
      >
        Book Now
      </motion.button>
    </motion.div>
  );
}
