// src/components/Header.jsx
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Booking", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className="w-full shadow-md fixed top-0 left-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-800 text-gray-100 text-sm py-2 px-6 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href="tel:+18779701212" className="flex items-center gap-2 hover:text-pink-400 transition">
            <Phone className="w-4 h-4" /> +1 877 970 1212
          </a>
          <a href="mailto:info@metrosites.com" className="flex items-center gap-2 hover:text-pink-400 transition">
            <Mail className="w-4 h-4" /> info@metrosites.com
          </a>
        </div>
        <div>
          <span className="text-xs">Mon - Sat: 8:00am - 6:00pm</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-primary flex items-center gap-2">
            👟 MetroSites Laundry & Shoe Repair
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-6 font-medium text-gray-700">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="ml-4 px-4 py-2 bg-primary text-white rounded-md shadow hover:bg-primary-focus transition-all font-medium"
              >
                Book Now
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="lg:hidden btn btn-ghost" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-inner">
            <ul className="flex flex-col p-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block text-gray-700 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="block w-full text-center px-4 py-2 bg-primary text-white rounded-md shadow hover:bg-primary-focus font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Book Now
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
