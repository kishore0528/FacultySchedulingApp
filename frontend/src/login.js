import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State for error message
  // const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login Submitted:', { email, password });

    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      console.log('Login Successful:', response.data);

      // Clear error message on successful login
      setError('');

      // Redirect to Dashboard
      // navigate('/dashboard');
    } catch (error) {
      console.error('Login Failed:', error.response.data);
      setError(error.response.data.message); // Set error message
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="image.png" alt="Logo" width="200" />
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>} {/* Display error message */}
          <button type="submit" className="login-btn">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
