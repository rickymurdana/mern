import React, { useState } from "react";
import "./TopBar.css";
import { logout } from "../services/authService";

const TopBar = () => {
  const [showLogoutOverlay, setShowLogoutOverlay] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutOverlay(true);
  };

  const handleConfirmLogout = async () => {
    // Implement logout logic here
    console.log(localStorage.getItem("email"));
    await logout(localStorage.getItem("email"));
    setShowLogoutOverlay(false);
    window.location.href = "/";
  };

  const handleCancelLogout = () => {
    setShowLogoutOverlay(false);
  };

  return (
    <div>
      <div className="topbar-container">
        <h1 className="topbar-title">Dashboard</h1>
        <button className="logout-button" onClick={handleLogoutClick}>
          Logout
        </button>
      </div>

      {showLogoutOverlay && (
        <div className="logout-overlay">
          <div className="logout-overlay-content">
            <p className="overlay-message">Are you sure you want to log out?</p>
            <div className="overlay-buttons">
              <button className="confirm-button" onClick={handleConfirmLogout}>
                Yes
              </button>
              <button className="cancel-button" onClick={handleCancelLogout}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;
