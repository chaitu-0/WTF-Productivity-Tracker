import { useState } from "react";
import { FaUserEdit } from "react-icons/fa";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Chaitanya Bhavar",
    avatar: "https://via.placeholder.com/100", // Placeholder image
    tasksCompleted: 12,
    streak: 5,
  });

  const changeAvatar = () => {
    const newAvatar = prompt("Enter new avatar URL:");
    if (newAvatar) {
      setUser({ ...user, avatar: newAvatar });
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mt-6 text-center">
      <div className="relative">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-24 h-24 mx-auto rounded-full border-4 border-blue-400 cursor-pointer hover:opacity-80 transition"
          onClick={changeAvatar}
        />
        <FaUserEdit
          className="absolute bottom-2 right-2 text-blue-500 cursor-pointer"
          size={20}
          onClick={changeAvatar}
        />
      </div>
      <h2 className="text-xl font-semibold mt-4">{user.name}</h2>
      <p className="text-gray-500">Tasks Completed: {user.tasksCompleted}</p>
      <p className="text-gray-500">🔥 Streak: {user.streak} days</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Edit Profile
      </button>
    </div>
  );
};

export default Profile;
