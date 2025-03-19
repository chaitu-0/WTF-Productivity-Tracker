import { useState } from "react";

const Profile = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white"
      } shadow-lg rounded-lg p-6 text-center transition-all`}
    >
      <div className="flex flex-col items-center">
        <img
          src="https://i.pravatar.cc/100"
          alt="Profile Avatar"
          className="rounded-full w-20 h-20 border-4 border-blue-500 mb-4"
        />
        <h2 className="text-xl font-bold">Chaitanya Bhavar 🚀</h2>
        <p className="text-gray-500 dark:text-gray-400">Full Stack Developer</p>

        <div className="mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
