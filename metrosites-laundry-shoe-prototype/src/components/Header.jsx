import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "Booking", href: "/booking" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 animate-fade-in">
      {/* Top Bar */}
      <div className="bg-[#2C2F33] text-[#89CFF0] text-sm py-2 px-6 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-6">
          <a
            href="tel:+18779701212"
            className="flex items-center gap-2 hover:text-white transition-colors duration-300"
          >
            <Phone className="w-4 h-4" /> +1 877 970 1212
          </a>
          <a
            href="mailto:info@metrosites.com"
            className="flex items-center gap-2 hover:text-white transition-colors duration-300"
          >
            <Mail className="w-4 h-4" /> info@metrosites.com
          </a>
        </div>
        <span className="text-xs opacity-90">Mon - Sat: 8:00am - 6:00pm</span>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#1A1F2E] shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold text-[#89CFF0] flex items-center gap-2 animate-bounce"
          >
            👟 MetroSites Laundry & Shoe Repair
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-6 font-medium text-gray-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-[#89CFF0] transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="ml-4 px-5 py-2 bg-[#89CFF0] text-[#1A1F2E] rounded-md shadow-lg hover:bg-[#6fbbe8] transform hover:-translate-y-1 transition-all duration-300 font-semibold"
              >
                Book Now
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden btn btn-ghost text-[#89CFF0]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-[#1A1F2E] shadow-inner animate-fade-in-down">
            <ul className="flex flex-col p-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block text-gray-300 hover:text-[#89CFF0] transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="block w-full text-center px-4 py-2 bg-[#89CFF0] text-[#1A1F2E] rounded-md shadow-lg hover:bg-[#6fbbe8] transform hover:-translate-y-1 transition-all duration-300 font-semibold"
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
