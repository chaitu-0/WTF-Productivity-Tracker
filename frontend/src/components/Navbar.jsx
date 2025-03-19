import { useState } from "react";
import { FaUser } from "react-icons/fa";
import Profile from "./Profile";  

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);  

  const toggleProfile = (e) => {
    e.preventDefault();  // 🚀 ✅ Yeh reload hone se rokega
    setShowProfile((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-xl font-bold">🔥 WTF Tracker</h1>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <button className="text-gray-700 hover:text-blue-500">Dashboard</button>
        <button className="text-gray-700 hover:text-blue-500">Tasks</button>

        {/* Profile Button */}
        <div className="relative">
          <button
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
            onClick={toggleProfile}  
          >
            <FaUser />
            <span>Profile</span>
          </button>

          {/* Profile Dropdown */}
          {showProfile && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
              <Profile />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
