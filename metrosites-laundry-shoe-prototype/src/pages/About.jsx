import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, CheckCircle, Clock, Star } from "lucide-react";

export default function Booking() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4"
        >
          Book Your Laundry or Shoe Repair
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg max-w-2xl mx-auto"
        >
          Fast, easy, and reliable service. Schedule your pickup or drop-off and
          let us handle the rest.
        </motion.p>
      </section>

      {/* Booking Form */}
      <section className="max-w-4xl mx-auto bg-white mt-16 mb-20 p-10 rounded-2xl shadow-md">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-gray-800"
        >
          Booking Form
        </motion.h2>

        <form className="space-y-6">
          {/* Name, Contact & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full rounded-lg"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="input input-bordered w-full rounded-lg"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full rounded-lg"
            required
          />

          {/* Service & Date */}
          <div className="grid md:grid-cols-2 gap-6">
            <select className="select select-bordered w-full rounded-lg" required>
              <option disabled selected>Select Service</option>
              <option>Laundry - Wash & Fold</option>
              <option>Laundry - Iron Only</option>
              <option>Shoe Repair - Sole Replacement</option>
              <option>Shoe Repair - Deep Cleaning</option>
            </select>
            <input
              type="date"
              className="input input-bordered w-full rounded-lg"
              required
            />
          </div>

          {/* Pickup or Drop-off */}
          <div className="flex gap-6">
            <label className="flex items-center space-x-2">
              <input type="radio" name="serviceType" className="radio" required />
              <span>Pickup</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="serviceType" className="radio" />
              <span>Drop-off</span>
            </label>
          </div>

          {/* Address */}
          <textarea
            rows="3"
            placeholder="Pickup/Drop-off Address"
            className="textarea textarea-bordered w-full rounded-lg"
            required
          ></textarea>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="btn bg-red-600 text-white border-none w-full"
          >
            Confirm Booking
          </motion.button>
        </form>
      </section>

      {/* Why Book With Us */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-10"
          >
            Why Book With MetroSites Laundry & Shoe Repair?
          </motion.h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: CalendarDays, title: "Flexible Scheduling", text: "Pick a time that works for you." },
              { icon: CheckCircle, title: "Trusted Quality", text: "Handled by professionals." },
              { icon: Clock, title: "Fast Turnaround", text: "Same-day or next-day options." },
              { icon: Star, title: "Customer Satisfaction", text: "Rated 5-stars by clients." },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center space-y-3"
              >
                <div className="bg-red-100 text-red-600 w-14 h-14 flex items-center justify-center rounded-full">
                  <item.icon className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
