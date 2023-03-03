import { NavLink } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import { useAuthContext, useToken } from "./auth";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          WizQuiz
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/quiz">
                Quiz
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Sign Up
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signin">
                Sign In
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/leaderboard">
                Leaderboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/updateprofile">
                Update Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/founderspage">
                Founders Page
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// authorization

// const { token } = useAuthContext();
// const { logout } = useToken();

// this line of code fetches user data

// const [user, setUser] = useState([]);
// const fetchUserData = async () => {
//   const URL = "http://localhost:8080/api/accounts/";

//   const response = await fetch(URL, {
//     headers: { Authorization: `Bearer ${token}` },
//   });

//   if (response.ok) {
//     const data = await response.json();
//     setUser(data);
//   }
// };
// useEffect(() => {
//   fetchUserData();
// }, [token]);

//// logout feature

// const handleLogout = async (e) => {
//   await logout();
// };

export default Nav;