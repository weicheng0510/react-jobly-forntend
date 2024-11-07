import React from "react";

const HomeUser = ({ currentUser }) => {
  return (
    <div className="home-user">
      <h2>Welcome Back, {currentUser.username}!</h2>
    </div>
  )
}

export default HomeUser;