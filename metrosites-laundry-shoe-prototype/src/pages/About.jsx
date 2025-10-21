import React from "react";
import { motion } from "framer-motion";
import { Shirt, Scissors, Smile, Users, Award } from "lucide-react";

export default function About() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 via-pink-600 to-yellow-500 text-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-4"
        >
          About MetroSites Laundry & Shoe Repair
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg max-w-3xl mx-auto font-light"
        >
          Dedicated to delivering spotless laundry and professional shoe repair
          services since day one — because your comfort and confidence matter.
        </motion.p>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <img
            src="https://images.unsplash.com/photo-1581579185169-43b8b1f83f9b?auto=format&fit=crop&w=800&q=80"
            alt="Laundry shop"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Clean. Fast. Reliable.
            </h2>
            <p className="text-gray-700 mb-4">
              MetroSites Laundry & Shoe Repair was founded with one goal in
              mind: to make people’s lives easier through high-quality, quick,
              and affordable services. Whether it's your daily laundry, a
              delicate garment, or your favorite pair of sneakers — we handle it
              with care and precision.
            </p>
            <p className="text-gray-700">
              Our team combines modern cleaning technology with years of
              hands-on experience to ensure your clothes and shoes always come
              back fresh, spotless, and ready to wear.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Mission and Values */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-red-600 mb-8"
          >
            Our Mission & Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-gray-100 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <Shirt className="w-12 h-12 mx-auto text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We aim for perfection in every wash, press, and stitch.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-gray-100 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <Smile className="w-12 h-12 mx-auto text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer Happiness</h3>
              <p className="text-gray-600">
                Your satisfaction drives everything we do — happy customers,
                happy team!
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-gray-100 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <Scissors className="w-12 h-12 mx-auto text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Precision</h3>
              <p className="text-gray-600">
                Every detail counts — we handle your garments and shoes like
                they’re our own.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-8">
            Meet Our Team
          </h2>
          <p className="text-gray-600 mb-12">
            Our passionate and skilled team ensures you always receive excellent
            service — from drop-off to delivery.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Lebo M.",
                role: "Laundry Specialist",
                img: "https://randomuser.me/api/portraits/women/64.jpg",
              },
              {
                name: "Thabo K.",
                role: "Shoe Repair Expert",
                img: "https://randomuser.me/api/portraits/men/33.jpg",
              },
              {
                name: "Sibongile R.",
                role: "Customer Care Manager",
                img: "https://randomuser.me/api/portraits/women/22.jpg",
              },
            ].map((person, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-28 h-28 mx-auto rounded-full mb-4 object-cover border-4 border-red-500"
                />
                <h3 className="font-semibold text-lg text-gray-800">
                  {person.name}
                </h3>
                <p className="text-red-600 text-sm">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards / Recognition */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <Award className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
          <h2 className="text-3xl font-bold text-red-600 mb-4">
            Recognized for Service Excellence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            MetroSites Laundry & Shoe Repair has been recognized locally for
            outstanding quality and reliability — a true reflection of our
            community’s trust.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center">
        <Users className="w-10 h-10 mx-auto text-red-500 mb-3" />
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold"
        >
          Join Our Happy Customers Today!
        </motion.h3>
        <p className="mt-3 text-gray-300">
          Discover why hundreds trust MetroSites with their laundry and shoe
          care.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 btn bg-red-600 border-none hover:bg-red-700"
        >
          Book Your Service
        </motion.button>
      </section>
    </div>
  );
}
