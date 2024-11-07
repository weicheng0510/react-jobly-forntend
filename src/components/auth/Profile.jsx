import React, { useContext, useState } from "react";
import UserContext from "../../UserContext";
import JoblyApi from "../../api";
import '../../styles/Profile.css'

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    username: currentUser.username,
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email
  });
  const [error, setError] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(d => ({ ...d, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { username, ...profileData } = formData;
      const updatedUser = await JoblyApi.editProfile(currentUser.username, profileData);
      setCurrentUser(updatedUser);
      setIsUpdated(true);
    } catch (e) {
      setError(e);
    }
  }

  return (
    <div className="profile">
      <h3>Profile</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input id="username" name="username" value={formData.username} onChange={handleChange} disabled />
        </div>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">E-mail: </label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        {error.length ? <div>{error}</div> : null}
        {isUpdated ? <p>Updated successfully</p> : null}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Profile;