import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          {`Nodirbek's`}
        </Link>

        {/* Mobil menyu tugmasi */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Navigatsiya menyusi */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <ul className="flex gap-6">
            <li>
              <Link to="/" className="text-gray-700 hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-gray-700 hover:text-blue-500">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-700 hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobil menyu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <ul className="flex flex-col gap-4 p-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-blue-500 block"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-blue-500 block"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-700 hover:text-blue-500 block"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-blue-500 block"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
