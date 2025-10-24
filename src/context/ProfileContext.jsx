import React, { createContext, useContext, useState, useEffect } from "react";

const Profilecontext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    name: "Jayshri Kulkarni",
    email: "jayshri@email.com",
    address: "Pune, Maharashtra, India",
  });

  // Load profile from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("profile");
    if (saved) setProfile(JSON.parse(saved));
  }, []);

  const updateProfile = (newProfile) => {
    setProfile(newProfile);
    localStorage.setItem("profile", JSON.stringify(newProfile));
  };
  
  return (
    <Profilecontext.Provider value={{ profile, updateProfile }}>
      {children}
    </Profilecontext.Provider>
  );
};

export const useProfile = () => useContext(Profilecontext);
