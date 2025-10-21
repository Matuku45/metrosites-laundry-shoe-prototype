import React from "react";
import { motion } from "framer-motion";
import { Sparkles, WashingMachine, Scissors, Clock, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-pink-600 to-yellow-500 text-white py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            MetroSites Laundry & Shoe Repair
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg md:text-xl font-light"
          >
            👟 Quality Service • Quick Turnaround • Happy Customers 🧺
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex justify-center gap-4"
          >
            <button className="btn btn-primary bg-white text-red-600 border-none hover:bg-gray-200">
              Book a Service
            </button>
            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-red-600">
              View Pricing
            </button>
          </motion.div>
        </div>

        <Sparkles className="absolute top-10 left-10 w-12 h-12 opacity-30 animate-pulse" />
        <Star className="absolute bottom-10 right-10 w-14 h-14 opacity-40 animate-spin-slow" />
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-8">
            Our Premium Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Laundry Service */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-gray-100 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <WashingMachine className="w-12 h-12 mx-auto text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Laundry Services</h3>
              <p className="text-gray-600">
                Fresh, clean, and neatly folded clothes. Drop off and pick up with ease.
              </p>
            </motion.div>

            {/* Shoe Repair */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-gray-100 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <Scissors className="w-12 h-12 mx-auto text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Shoe Repair</h3>
              <p className="text-gray-600">
                Restore your favorite shoes with professional stitching and polishing.
              </p>
            </motion.div>

            {/* Quick Turnaround */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-gray-100 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <Clock className="w-12 h-12 mx-auto text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Service</h3>
              <p className="text-gray-600">
                Same-day or next-day options available. We respect your time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-16 bg-red-600 text-white text-center">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-10">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Lerato M.",
                feedback:
                  "The best laundry service I’ve ever used! My clothes are spotless and smell great.",
              },
              {
                name: "Thabo K.",
                feedback:
                  "Brought my sneakers in — they look brand new again. Fantastic service!",
              },
              {
                name: "Sibongile R.",
                feedback:
                  "Fast, friendly, and reliable. I always recommend MetroSites to my friends.",
              },
            ].map((review, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <p className="italic text-gray-700 mb-4">"{review.feedback}"</p>
                <h4 className="font-semibold text-red-600">{review.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold"
        >
          Ready to Experience MetroSites Quality?
        </motion.h3>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="mt-6 btn bg-red-600 border-none hover:bg-red-700"
        >
          Book Your Service Now
        </motion.button>
      </section>
    </div>
  );
}
