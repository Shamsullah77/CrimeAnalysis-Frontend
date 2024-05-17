
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SignUp.css";

function SignUpPage() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:3002/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.Password !== formData.ConfirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    axios
      .post("http://localhost:3002/addusers", formData)
      .then((res) => {
        console.log("User data is submitted successfully");
        fetchData(); // Refresh data after submission
        setSuccessMessage("User added successfully"); // Set success message
        setTimeout(() => {
          setSuccessMessage(""); // Clear success message after 3 seconds
        }, 3000);
      })
      .catch((err) => console.log(err));

    console.log(formData);
  };

  return (
    <div className="container2">
      <h1>Sign Up</h1>
      {successMessage && <div className="success-message">{successMessage}</div>} {/* Display success message */}
      <form onSubmit={handleSubmit}>
        <div className="form-group2">
          <label>Name</label>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group2">
          <label>Email</label>
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group2">
          <label>Password</label>
          <input
            type="password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group2">
          <label>Confirm Password</label>
          <input
            type="password"
            name="ConfirmPassword"
            value={formData.ConfirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;
