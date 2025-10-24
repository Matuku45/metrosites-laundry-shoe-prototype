import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactCard from "../components/ContactCard";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      text: "123 MetroSites Street, Johannesburg, South Africa",
    },
    {
      icon: Phone,
      title: "Call Us",
      text: "+27 65 555 8899",
    },
    {
      icon: Mail,
      title: "Email Us",
      text: "support@metrositeslaundry.co.za",
    },
    {
      icon: Clock,
      title: "Business Hours",
      text: "Mon - Sat: 8:00 AM - 6:00 PM",
    },
  ];

  return (
    <div className="bg-blue-50 min-h-screen text-midnight">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-400 to-blue-300 text-white text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4 text-midnight"
        >
          Get In Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg max-w-2xl mx-auto text-midnight/90"
        >
          Have a question or need help with your laundry or shoe repair order? 
          We’re always happy to assist.
        </motion.p>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {contactInfo.map((info, index) => (
          <ContactCard key={index} {...info} />
        ))}
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-md mb-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-midnight"
        >
          Send Us a Message
        </motion.h2>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-midnight font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full rounded-lg border-midnight/30"
              />
            </div>
            <div>
              <label className="block text-midnight font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full rounded-lg border-midnight/30"
              />
            </div>
          </div>

          <div>
            <label className="block text-midnight font-medium mb-2">Subject</label>
            <input
              type="text"
              placeholder="What is this about?"
              className="input input-bordered w-full rounded-lg border-midnight/30"
            />
          </div>

          <div>
            <label className="block text-midnight font-medium mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="textarea textarea-bordered w-full rounded-lg border-midnight/30"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="btn bg-blue-500 text-white border-none hover:bg-blue-600 w-full mt-4"
          >
            Send Message
          </motion.button>
        </form>
      </section>

      {/* Google Map Section */}
      <section className="mb-16">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl font-bold mb-6 text-midnight"
        >
          Find Us Here
        </motion.h3>
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-md">
          <iframe
            title="MetroSites Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.642769812361!2d28.047305!3d-26.204103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950bafc8cfcf23%3A0xdee8f0ec04d02041!2sJohannesburg!5e0!3m2!1sen!2sza!4v1699999999999!5m2!1sen!2sza"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
