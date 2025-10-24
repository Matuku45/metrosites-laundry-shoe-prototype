import React from "react";
import { motion } from "framer-motion";
import { Shirt, Scissors, Sparkles, Package, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PricingCard from "../components/PricingCard";

export default function Pricing() {
  const navigate = useNavigate();

  const pricingData = [
    { title: "Standard Laundry", icon: Shirt, price: "R50 / load", description: "Perfect for your everyday clothes", features: ["Washed, dried, and folded", "Eco-friendly detergents", "Same-day turnaround available"] },
    { title: "Delicate Care", icon: Sparkles, price: "R80 / load", description: "For special garments needing extra care", features: ["Gentle wash cycle", "Fabric softening treatment", "Pressed and packaged neatly"] },
    { title: "Shoe Cleaning", icon: Package, price: "R120 / pair", description: "Premium sneaker & leather shoe cleaning", features: ["Deep sole cleaning", "Stain and odor removal", "Repaint and polish available"] },
    { title: "Shoe Repair", icon: Scissors, price: "From R150", description: "Fix and restore your favorite pairs", features: ["Heel and sole replacement", "Stitching and patching", "Custom color restoration"] },
    { title: "VIP Express Service", icon: Star, price: "R200 / load", description: "Same-day express laundry or repair", features: ["Priority service line", "Pickup & delivery available", "Perfect for emergencies"] },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-pink-400 text-white text-center py-20">
        <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl font-extrabold mb-4">
          Affordable & Transparent Pricing
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-lg max-w-3xl mx-auto">
          Honest pricing — no hidden fees, just quality service and clean results you can trust.
        </motion.p>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pricingData.map((item, i) => (
            <PricingCard key={i} {...item}>
              <motion.button whileHover={{ scale: 1.05 }} className="btn bg-red-500 text-white border-none mt-4 w-full hover:bg-red-600" onClick={() => navigate("/booking")}>
                Book Now
              </motion.button>
            </PricingCard>
          ))}
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 text-gray-800 text-center py-16">
        <h2 className="text-3xl font-bold mb-4">Need a Custom Quote or Bulk Order?</h2>
        <p className="text-gray-600 mb-6">We offer discounts for regular customers, hotels, and institutions.</p>
        <motion.button whileHover={{ scale: 1.05 }} className="btn bg-red-500 text-white border-none hover:bg-red-600" onClick={() => navigate("/booking")}>
          Book Now
        </motion.button>
      </section>
    </div>
  );
}
