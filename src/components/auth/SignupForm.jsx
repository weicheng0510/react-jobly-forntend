import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/LoginForm.css'
import UserContext from "../../UserContext";

const Signup = ({ signup }) => {
  const { currentUser } = useContext(UserContext);
  const init = { username: "", password: "", firstName: "", lastName: "", email: "" };
  const [formData, setFormData] = useState(init);
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(d => ({ ...d, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(formData);
      setFormData(init);
      navigate('/');
    } catch (e) {
      setError(e);
    }
  }

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  return (
    <div className="login-form">
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input id="username" name="username" value={formData.username} onChange={handleChange} autoComplete="username" required />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} autoComplete="password" required />
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
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Signup;