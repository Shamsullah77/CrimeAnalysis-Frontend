import React, { useState } from "react";
import "./SignIn.css";

function SignInPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement signIn functionality
    console.log(formData);
  };

  return (
    <div className="container1">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group1">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group1">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignInPage;
