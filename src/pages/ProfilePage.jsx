import React, { useState, useEffect } from "react";
import { useProfile } from "../context/Profilecontext";
import "../styles/Profilepage.css"; // create this file for styling

const Profilepage = () => {
  const { profile, updateProfile } = useProfile();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  // Load profile when context changes
  useEffect(() => {
    if (profile) {
      setForm(profile);
    }
  }, [profile]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateProfile(form);
    alert("Profile updated ✅");
  };

  return (
    <div className="profile-container">
      <h2>My Profile 👤</h2>
      <form className="profile-form">
        <div className="form-group">
          <label>Name:</label>
          <input name="name" value={form.name} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Address:</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
          />
        </div>

        <button type="button" onClick={handleSave}>
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default Profilepage;
