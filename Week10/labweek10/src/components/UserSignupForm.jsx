import React, { useState } from "react";

const PROVINCES = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Nova Scotia",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
  "Northwest Territories",
  "Nunavut",
  "Yukon",
];

const UserSignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    address1: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const validate = () => {
    const err = {};
    if (!formData.email.trim()) err.email = "Email is required";
    if (!formData.fullName.trim()) err.fullName = "Full name is required";
    if (!formData.address1.trim()) err.address1 = "Address is required";
    if (!formData.city.trim()) err.city = "City is required";
    if (!formData.province) err.province = "Province is required";
    if (!formData.postalCode.trim()) err.postalCode = "Postal code is required";
    if (!formData.termsAccepted) err.termsAccepted = "You must accept the terms";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted({ ...formData });
  };

  return (
    <div className="panel">
      <h1>Data Entry Form</h1>

      <form onSubmit={handleSubmit} className="grid">
        <div className="row two">
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="err">{errors.email}</span>}
          </div>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <span className="err">{errors.fullName}</span>}
          </div>
        </div>

        <div className="row">
          <div className="field">
            <label>Address</label>
            <input
              type="text"
              name="address1"
              placeholder="1234 Main St"
              value={formData.address1}
              onChange={handleChange}
            />
            {errors.address1 && <span className="err">{errors.address1}</span>}
          </div>
        </div>

        <div className="row">
          <div className="field">
            <label>Address 2</label>
            <input
              type="text"
              name="address2"
              placeholder="Apartment, studio, or floor"
              value={formData.address2}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row three">
          <div className="field">
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && <span className="err">{errors.city}</span>}
          </div>

          <div className="field">
            <label>Province</label>
            <select name="province" value={formData.province} onChange={handleChange}>
              <option value="">Choose...</option>
              {PROVINCES.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
            {errors.province && <span className="err">{errors.province}</span>}
          </div>

          <div className="field">
            <label>Postal Code</label>
            <input
              type="text"
              name="postalCode"
              placeholder="A1A 1A1"
              value={formData.postalCode}
              onChange={handleChange}
            />
            {errors.postalCode && <span className="err">{errors.postalCode}</span>}
          </div>
        </div>

        <div className="row">
          <label className="check">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            <span>Agree Terms &amp; Condition?</span>
          </label>
          {errors.termsAccepted && <span className="err">{errors.termsAccepted}</span>}
        </div>

        <div className="row">
          <button type="submit" className="submit">Submit</button>
        </div>
      </form>

      {submitted && (
        <div className="panel result">
          <div><span className="k">Email:</span> <span className="v">{submitted.email}</span></div>
          <div><span className="k">Full Name:</span> <span className="v">{submitted.fullName}</span></div>
          <div><span className="k">Address:</span> <span className="v">{submitted.address1}</span></div>
          <div><span className="k">City:</span> <span className="v">{submitted.city}</span></div>
          <div><span className="k">Province:</span> <span className="v">{submitted.province}</span></div>
          <div><span className="k">Postal Code:</span> <span className="v">{submitted.postalCode}</span></div>
        </div>
      )}
    </div>
  );
};

export default UserSignupForm;
