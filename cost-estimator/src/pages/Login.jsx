import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    try {
      const response = await fetch(
        `http://localhost:3001/users?email=${email}&password=${password}`
      );

      const users = await response.json();

      if (users.length === 0) {
        setError("Invalid email or password");
        return;
      }

      const user = users[0];

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(user)
      );

      navigate(from, { replace: true });
    } catch (error) {
      setError("Unable to connect to server");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">

        <h1>CRM Login</h1>

        <p>Login to continue</p>

        <form onSubmit={handleLogin}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <p className="error">
              {error}
            </p>
          )}

          <button type="submit">
            Login
          </button>

        </form>

        <div className="login-demo">

          <p>Demo Login</p>

          <p>Email: jahnavi@gmail.com</p>

          <p>Password: 123456</p>

        </div>

      </div>
    </div>
  );
}

export default Login;
