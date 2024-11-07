import React from "react";
import { Link } from "react-router-dom";

const HomeWelcome = () => {
  return (
    <div className="home-welcome">
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      <div className="home-buttons">
        <Link to='login'>
          <button className="home-login-button">Log in</button>
        </Link>
        <Link to='signup'>
          <button className="home-signup-button">Sign Up</button>
        </Link>
      </div>
    </div>
  )
}

export default HomeWelcome;