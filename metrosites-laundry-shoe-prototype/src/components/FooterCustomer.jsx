import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function FooterOfCustomer() {
  return (
    <footer className="bg-gray-900 text-gray-100 mt-20">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 animate-fade-in">
        
        {/* About Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-red-600">
            MetroSites Laundry & Shoe Repair
          </h2>
          <p className="text-gray-300">
            Providing quality laundry and shoe repair services with fast turnaround. 
            We make our customers happy every day!
          </p>
        </div>

        {/* Contact Section */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-red-500">Contact Us</h3>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-red-500" />
            <span>+1 877 970 1212</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-red-500" />
            <span>info@metrosites.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-red-500" />
            <span>123 Main Street, City, Country</span>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-red-500">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-red-600 transition-transform transform hover:scale-125">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-red-600 transition-transform transform hover:scale-125">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-red-600 transition-transform transform hover:scale-125">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-gray-400 animate-fade-in-up">
        &copy; {new Date().getFullYear()} MetroSites Laundry & Shoe Repair. All rights reserved.
      </div>
    </footer>
  );
}
