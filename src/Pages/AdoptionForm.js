// AdoptionForm.js

import React, { useState } from 'react';
import '../CSS/AdoptionForm.css';

const AdoptionForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    petType: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission (e.g., API call, data processing)
    console.log('Form submitted:', formData);
    // Optionally, you can reset the form after submission
    // setFormData({
    //   fullName: '',
    //   email: '',
    //   phone: '',
    //   address: '',
    //   petType: '',
    //   additionalInfo: '',
    // });
  };

  return (
    <div className="adoption-form-container">
      <h2>Adoption Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>

        <label>
          Address:
          <textarea name="address" value={formData.address} onChange={handleChange} required />
        </label>

        <label>
          Pet Type:
          <input type="text" name="petType" value={formData.petType} onChange={handleChange} required />
        </label>

        <label>
          Additional Information:
          <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdoptionForm;
