import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, CheckCircle, Clock, Star } from "lucide-react";

export default function Booking() {
  return (
    <div className="bg-[#1A1F2E] min-h-screen text-white">
      {/* Hero Section */}
      <section className="bg-[#2C2F33] py-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4 text-[#89CFF0]"
        >
          Book Your Laundry or Shoe Repair
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg max-w-2xl mx-auto text-gray-300"
        >
          Fast, easy, and reliable service. Schedule your pickup or drop-off and
          let us handle the rest.
        </motion.p>
      </section>

      {/* Booking Form */}
      <section className="max-w-4xl mx-auto mt-16 mb-20 p-10 rounded-2xl shadow-xl bg-[#2C2F33]">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-[#89CFF0]"
        >
          Booking Form
        </motion.h2>

        <form className="space-y-6">
          {/* Name, Contact & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full rounded-lg bg-[#1A1F2E] text-white border-gray-600 placeholder-gray-400"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="input input-bordered w-full rounded-lg bg-[#1A1F2E] text-white border-gray-600 placeholder-gray-400"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full rounded-lg bg-[#1A1F2E] text-white border-gray-600 placeholder-gray-400"
            required
          />

          {/* Service & Date */}
          <div className="grid md:grid-cols-2 gap-6">
            <select
              className="select select-bordered w-full rounded-lg bg-[#1A1F2E] text-white border-gray-600"
              required
            >
              <option disabled selected>
                Select Service
              </option>
              <option>Laundry - Wash & Fold</option>
              <option>Laundry - Iron Only</option>
              <option>Shoe Repair - Sole Replacement</option>
              <option>Shoe Repair - Deep Cleaning</option>
            </select>
            <input
              type="date"
              className="input input-bordered w-full rounded-lg bg-[#1A1F2E] text-white border-gray-600"
              required
            />
          </div>

          {/* Pickup or Drop-off */}
          <div className="flex gap-6">
            <label className="flex items-center space-x-2">
              <input type="radio" name="serviceType" className="radio checked:bg-[#89CFF0]" required />
              <span>Pickup</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="serviceType" className="radio checked:bg-[#89CFF0]" />
              <span>Drop-off</span>
            </label>
          </div>

          {/* Address */}
          <textarea
            rows="3"
            placeholder="Pickup/Drop-off Address"
            className="textarea textarea-bordered w-full rounded-lg bg-[#1A1F2E] text-white border-gray-600 placeholder-gray-400"
            required
          ></textarea>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="btn bg-[#89CFF0] text-[#1A1F2E] border-none w-full"
          >
            Confirm Booking
          </motion.button>
        </form>
      </section>

      {/* Why Book With Us */}
      <section className="bg-[#2C2F33] py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-10 text-[#89CFF0]"
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
                className="bg-[#1A1F2E] p-6 rounded-2xl shadow-md flex flex-col items-center text-center space-y-3 border border-[#2C2F33]"
              >
                <div className="bg-[#89CFF0]/20 text-[#89CFF0] w-14 h-14 flex items-center justify-center rounded-full">
                  <item.icon className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
