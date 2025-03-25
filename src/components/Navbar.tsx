import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = [
    { name: "Home", href: "/", current: true },
    {
      name: "Pricing",
      href: "https://www.webshed.app/pricing",
      current: false,
    },
    {
      name: "3D Shed Designer",
      href: "https://www.webshed.app/",
      current: false,
    },
    {
      name: "3D Structural Steel",
      href: "https://www.webshed.app/features/frame-types/3d-structural-steel-shed-design-software",
      current: false,
    },
    {
      name: "3D Carport Designer",
      href: "/products/steel-carport-designer",
      current: false,
    },
    {
      name: "3D Cabinet Designer",
      href: "/products/3d-cabinet-designer",
      current: false,
    },
    { name: "Contact", href: "/contact", current: false },
  ];
  return (
    <nav className="bg-[#5299d8] p-4">
      <ul className="hidden md:flex space-x-6 text-gray-300">
        {/* Desktop Menu */}
        {navigation.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                `hover:text-white text-xs ${isActive ? "active" : ""}`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? (
          <span className="text-3xl">&times;</span>
        ) : (
          <span className="text-2xl">&#9776;</span>
        )}
      </button>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-[#5299d8]`}>
        <ul className="flex flex-col items-center py-4 space-y-4 ">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `hover:text-white text-xs ${
                    isActive ? "text-pink-500" : "text-yellow-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
