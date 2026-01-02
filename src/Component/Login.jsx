import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Css file/login.css'; 

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const adminUsername = "Admin";
        const adminPassword = "Admin";
        if (username === adminUsername && password === adminPassword) {
            localStorage.setItem("userToken", "special_access_granted");
            navigate("/dashboard");
        } else {
       
            alert("Invalid Username or Password. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-wrapper">
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    
                    <div className="input-box">
                        <input 
                            type="text" 
                            placeholder="Username" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required 
                        />
                        <i className='bx bxs-user-pin'></i>
                    </div>

                    <div className="input-box">
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                        <i className='bx bxs-lock'></i>
                    </div>

                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" /> Remember Me
                        </label>
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>

                    <button type="submit" className="login-btn">Login</button>

                    <div className="register-link">
                        <p>Don't have an account? <Link to="/register">Register</Link></p>
                    </div>

                    <Link to="/" className="back-home">← Back to Home</Link>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;