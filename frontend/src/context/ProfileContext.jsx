import { createContext, useContext, useState } from "react";

// 1️⃣ Context Create Karo
const ProfileContext = createContext();

// 2️⃣ Context Provider Function
export const ProfileProvider = ({ children }) => {
  const [showProfile, setShowProfile] = useState(false);

  // Toggle Profile Function
  const toggleProfile = () => setShowProfile((prev) => !prev);

  return (
    <ProfileContext.Provider value={{ showProfile, toggleProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

// 3️⃣ Custom Hook (Easy Access)
export const useProfile = () => useContext(ProfileContext);
