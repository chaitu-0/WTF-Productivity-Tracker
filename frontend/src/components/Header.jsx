import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className={`p-4 shadow-md ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">🔥 WTF Tracker</h1>

        {/* Navbar Links */}
        <nav className="space-x-6">
          <a href="#" className="hover:text-blue-500">Dashboard</a>
          <a href="#" className="hover:text-blue-500">Tasks</a>
          <a href="#" className="hover:text-blue-500">Profile</a>
        </nav>

        {/* Dark Mode Toggle */}
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200">
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
        </button>
      </div>
    </header>
  );
}

export default Header;
