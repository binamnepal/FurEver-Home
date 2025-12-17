import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css file/Form.css';

const AdoptFormPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        petInterest: '',
        housingType: '',
        fencedYard: '',
        document: null,
        agree: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === 'file') {
            setFormData(prev => ({ ...prev, [name]: files[0] }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Data:', formData);
        alert('Application Submitted Successfully!');
    };

    return (
        <div className="adopt-form-wrapper">
            <Link to="/" className="back-link">← Back</Link>
            
            <div className="form-card">
                <div className="form-header">
                    <h1>Adoption Application</h1>
                    <p>Help us find the perfect match for you and our furry friends.</p>
                </div>

                <form onSubmit={handleSubmit} className="adoption-form">
                    {/* PERSONAL INFORMATION */}
                    <fieldset>
                        <legend>Personal Information</legend>
                        
                        <div className="input-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} required />
                        </div>

                        <div className="input-row">
                            <div className="input-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" placeholder="email@example.com" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone" placeholder="98XXXXXXXX" value={formData.phone} onChange={handleChange} required />
                            </div>
                        </div>

                        <div className="input-group">
                            <label htmlFor="address">Full Residential Address</label>
                            <textarea id="address" name="address" rows="3" placeholder="Street, City, Zip Code" value={formData.address} onChange={handleChange} required></textarea>
                        </div>
                    </fieldset>

                    {/* ADOPTION DETAILS */}
                    <fieldset>
                        <legend>Adoption Details</legend>
                        <div className="input-group">
                            <label htmlFor="petInterest">Animal you are interested in?</label>
                            <input type="text" id="petInterest" name="petInterest" placeholder="e.g. Barnaby the Bird" value={formData.petInterest} onChange={handleChange} />
                        </div>

                        <div className="input-group">
                            <label htmlFor="housingType">Housing Situation</label>
                            <select id="housingType" name="housingType" value={formData.housingType} onChange={handleChange} required>
                                <option value="">-- Select One --</option>
                                <option value="house">Own House</option>
                                <option value="apartment">Apartment</option>
                                <option value="rent">Rented Property</option>
                            </select>
                        </div>

                        <div className="input-group">
                            <label>Do you have a fenced yard?</label>
                            <div className="radio-container">
                                <label className="radio-label">
                                    <input type="radio" name="fencedYard" value="yes" checked={formData.fencedYard === 'yes'} onChange={handleChange} required /> Yes
                                </label>
                                <label className="radio-label">
                                    <input type="radio" name="fencedYard" value="no" checked={formData.fencedYard === 'no'} onChange={handleChange} /> No
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    {/* DOCUMENT UPLOAD */}
                    <fieldset>
                        <legend>Documents</legend>
                        <label htmlFor="document">Upload Identity (ID/Passport/Citizenship)</label>
                        <input type="file" id="document" name="document" accept=".pdf,.jpg,.png" onChange={handleChange} required className="file-input" />
                    </fieldset>

                    {/* AGREEMENT */}
                    <div className="checkbox-section">
                        <input type="checkbox" id="agree" name="agree" checked={formData.agree} onChange={handleChange} required />
                        <label htmlFor="agree">I confirm that all provided information is accurate.</label>
                    </div>

                    <button type="submit" className="submit-btn">Submit Application</button>
                </form>
            </div>
        </div>
    );
};

export default AdoptFormPage;