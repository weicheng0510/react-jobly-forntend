import React, { useContext } from "react";
import HomeWelcome from "./HomeWelcome";
import HomeUser from "./HomeUser";
import UserContext from "../../UserContext";
import '../../styles/Home.css'

const Home = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="home">
      {currentUser ? <HomeUser currentUser={currentUser} /> : <HomeWelcome />}
    </div>
  )
}

export default Home;