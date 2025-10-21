import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "Booking", href: "/booking" },
    { name: "Contact", href: "/contact" },
    { name: "About Us", href: "/about" },
    { name: "Log In", href: "/login" },
  ];

  return (
    <header className="w-full shadow-md">
      {/* --- Top Bar --- */}
      <div className="bg-base-200 text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <a
            href="tel:+18779701212"
            className="flex items-center gap-1 hover:text-primary"
          >
            <Phone className="w-4 h-4" />
            +1 877 970 1212
          </a>
          <a
            href="mailto:info@metrosites.com"
            className="flex items-center gap-1 hover:text-primary"
          >
            <Mail className="w-4 h-4" />
            info@metrosites.com
          </a>
        </div>
      </div>

      {/* --- Main Navbar --- */}
      <nav className="navbar bg-base-100">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo / Brand */}
          <a
            href="/"
            className="text-2xl font-bold text-primary flex items-center gap-2"
          >
            👟 MetroSites Laundry & Shoe Repair
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-6 text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-primary transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden btn btn-ghost"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-base-200 shadow-inner">
            <ul className="flex flex-col p-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block text-lg hover:text-primary transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
