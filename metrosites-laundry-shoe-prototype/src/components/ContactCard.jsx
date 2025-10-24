import React from "react";
import { motion } from "framer-motion";

export default function ContactCard({ icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center space-y-3"
    >
      <div className="bg-blue-100 text-blue-500 w-14 h-14 flex items-center justify-center rounded-full">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-semibold text-midnight">{title}</h3>
      <p className="text-midnight/70 text-sm">{text}</p>
    </motion.div>
  );
}
