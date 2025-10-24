import React from "react";
import { motion } from "framer-motion";
import { Sparkles, WashingMachine, Scissors, Clock, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#1A1F2E] text-white">
      {/* Hero Section */}
      <section className="relative bg-[#2C2F33] py-20 overflow-hidden text-center">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold drop-shadow-lg text-[#89CFF0]"
          >
            MetroSites Laundry & Shoe Repair
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg md:text-xl font-light text-gray-200"
          >
            👟 Quality Service • Quick Turnaround • Happy Customers 🧺
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex justify-center gap-4"
          >
            <button className="btn bg-[#89CFF0] text-[#1A1F2E] border-none hover:bg-[#70b9df]">
              Book a Service
            </button>
            <button className="btn border-2 border-[#89CFF0] text-[#89CFF0] hover:bg-[#89CFF0] hover:text-[#1A1F2E]">
              View Pricing
            </button>
          </motion.div>
        </div>

        <Sparkles className="absolute top-10 left-10 w-12 h-12 opacity-30 animate-pulse text-[#89CFF0]" />
        <Star className="absolute bottom-10 right-10 w-14 h-14 opacity-40 animate-spin-slow text-[#89CFF0]" />
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#2C2F33]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#89CFF0] mb-8">
            Our Premium Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Laundry */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-[#1A1F2E] rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <WashingMachine className="w-12 h-12 mx-auto text-[#89CFF0] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Laundry Services</h3>
              <p className="text-gray-300">
                Fresh, clean, and neatly folded clothes. Drop off and pick up with ease.
              </p>
            </motion.div>

            {/* Shoe Repair */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-[#1A1F2E] rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <Scissors className="w-12 h-12 mx-auto text-[#89CFF0] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Shoe Repair</h3>
              <p className="text-gray-300">
                Restore your favorite shoes with professional stitching and polishing.
              </p>
            </motion.div>

            {/* Fast Service */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-[#1A1F2E] rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <Clock className="w-12 h-12 mx-auto text-[#89CFF0] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Fast Service</h3>
              <p className="text-gray-300">
                Same-day or next-day options available. We respect your time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-16 bg-[#89CFF0] text-[#1A1F2E] text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold"
        >
          🎉 New Customers Get 15% Off Their First Order!
        </motion.h3>
        <p className="mt-3">Use code <strong>WELCOME15</strong> at checkout.</p>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#2C2F33]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#89CFF0] mb-10">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Lerato M.", feedback: "The best laundry service I’ve ever used! My clothes are spotless and smell great." },
              { name: "Thabo K.", feedback: "Brought my sneakers in — they look brand new again. Fantastic service!" },
              { name: "Sibongile R.", feedback: "Fast, friendly, and reliable. I always recommend MetroSites to my friends." },
            ].map((review, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-[#1A1F2E] p-6 rounded-xl shadow-md border border-[#2C2F33]"
              >
                <p className="italic text-gray-300 mb-4">"{review.feedback}"</p>
                <h4 className="font-semibold text-[#89CFF0]">{review.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#2C2F33] text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-[#89CFF0]"
        >
          Ready to Experience MetroSites Quality?
        </motion.h3>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="mt-6 btn bg-[#89CFF0] text-[#1A1F2E] border-none hover:bg-[#70b9df]"
        >
          Book Your Service Now
        </motion.button>
      </section>
    </div>
  );
}
