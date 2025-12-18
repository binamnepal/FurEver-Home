import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Css file/login.css';

const Register = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: ''
    });
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Registering user:", formData);
        alert("Registration successful!");
        navigate('/login');
    };

    return (
        <div className="login-container">
            <div className="login-wrapper">
                <form onSubmit={handleRegister}>
                    <h1>Register</h1>
                    
                    <div className="input-box">
                        <input 
                            type="text" 
                            name="fullName"
                            placeholder="Full Name" 
                            value={formData.fullName}
                            onChange={handleChange}
                            required 
                        />
                        <i className='bx bxs-user'></i>
                    </div>

                    <div className="input-box">
                        <input 
                            type="text" 
                            name="username"
                            placeholder="Username" 
                            value={formData.username}
                            onChange={handleChange}
                            required 
                        />
                        <i className='bx bxs-user-pin'></i>
                    </div>

                    <div className="input-box">
                        <input 
                            type="password" 
                            name="password"
                            placeholder="Password" 
                            value={formData.password}
                            onChange={handleChange}
                            required 
                        />
                        <i className='bx bxs-lock'></i>
                    </div>

                    <div className="input-box">
                        <input 
                            type="password" 
                            name="confirmPassword"
                            placeholder="Confirm Password" 
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required 
                        />
                        <i className='bx bxs-check-shield'></i>
                    </div>

                    <button type="submit" className="login-btn">Sign Up</button>

                    <div className="register-link">
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>

                    <Link to="/" className="back-home">← Back to Home</Link>
                </form>
            </div>
        </div>
    );
};

export default Register;