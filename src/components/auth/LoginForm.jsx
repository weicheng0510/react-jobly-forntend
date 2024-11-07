import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/LoginForm.css'

const LoginForm = ({ login }) => {
  const init = { username: "", password: "" };
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
      await login(formData);
      setFormData(init);
      navigate('/');
    } catch (e) {
      setError(e);
    }
  }

  return (
    <div className="login-form">
      <h3>Log In</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input id="username" name="username" value={formData.username} onChange={handleChange} autoComplete="username" required />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} autoComplete="password" required />
        </div>
        {error.length ? <div>{error}</div> : null}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default LoginForm;