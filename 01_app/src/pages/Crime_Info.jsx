
import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Crime_Info.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";

function Crime_Info() {
  const [crimeInfo, setCrimeInfo] = useState({
    crimeType: "",
    crimeTime: "",
    crimeLocation: "",
    guiltyName: "",
    guiltyGender: "",
    guiltySSN: "",
    guiltyProvince: "",
    guiltyPhoneNumber: "",
    evidence: "",
    areaPoliceOfficer: "",
    crimeHardness: "",
    crimeRemark: "",
    criminalPlacePictures: [],
    guiltyImage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCrimeInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3002/addcrime", crimeInfo);
      console.log(response.data); // Log the response from the server
      // Reset form
      setCrimeInfo({
        crimeType: "",
        crimeTime: "",
        crimeLocation: "",
        guiltyName: "",
        guiltyGender: "",
        guiltySSN: "",
        guiltyProvince: "",
        guiltyPhoneNumber: "",
        evidence: "",
        areaPoliceOfficer: "",
        crimeHardness: "",
        crimeRemark: "",
        criminalPlacePictures: [],
        guiltyImage: "",
      });
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const handleReset = () => {
    // Reset form
    setCrimeInfo({
      crimeType: "",
      crimeTime: "",
      crimeLocation: "",
      guiltyName: "",
      guiltyGender: "",
      guiltySSN: "",
      guiltyProvince: "",
      guiltyPhoneNumber: "",
      evidence: "",
      areaPoliceOfficer: "",
      crimeHardness: "",
      crimeRemark: "",
      criminalPlacePictures: [],
      guiltyImage: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="Container0">
        <div className="form_container0">
      
      <form onSubmit={handleSubmit}>
          <label htmlFor="dropdown">Crime Type</label>
          <select
            name="crimeType"
            id="dropdown"
            value={Crime_Info.crimeType}
            onChange={handleChange}
          >
            <option value="default" selected>
              Select Crime Types
            </option>
            <option value="option1">option 01</option>
            <option value="option2">option 02</option>
            <option value="option3">option 03</option>
          </select>

          <label>Crime Time</label>
          <input
            type="time"
            name="crimeTime"
            value={Crime_Info.crimeTime}
            onChange={handleChange}
          />

          <label for="location">Crime Location</label>
          <input
            placeholder="Enter Your Location"
            type="text"
            name="crimeLocation"
            value={Crime_Info.crimeLocation}
            onChange={handleChange}
          />

          <label>Guilty Name</label>
          <input
            placeholder="Enter Guilty Name"
            type="text"
            name="guiltyName"
            value={Crime_Info.guiltyName}
            onChange={handleChange}
          />

          <label htmlFor="dropdown">Guilty Gender</label>
          <select
            name="guiltyGender"
            id="dropdown"
            value={Crime_Info.guiltyGender}
            onChange={handleChange}
          >
            <option value="default" selected>
              Select Guilty Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">other</option>
          </select>

          <label>Guilty SSN</label>
          <input
            placeholder="Enter Guilty SSN"
            type="number"
            name="guiltySSN"
            value={Crime_Info.guiltySSN}
            onChange={handleChange}
          />

          <label>Guilty Province</label>
          <input
            placeholder="Enter Guilty Province"
            type="text"
            name="guiltyProvince"
            value={Crime_Info.guiltyProvince}
            onChange={handleChange}
          />

          <label>Guilty Phone Number</label>
          <input
            placeholder="Enter Guilty Phone Number"
            type="number"
            name="guiltyPhoneNumber"
            value={Crime_Info.guiltyPhoneNumber}
            onChange={handleChange}
          />

          <label>Evidence</label>
          <input
            placeholder="Enter name of Evidence"
            type="text"
            name="evidence"
            value={Crime_Info.evidence}
            onChange={handleChange}
          />

          <label>Area Police Officer</label>
          <input
            placeholder="Enter name of area Police Officer"
            type="text"
            name="areaPoliceOfficer"
            value={Crime_Info.areaPoliceOfficer}
            onChange={handleChange}
          />

          <label htmlFor="dropdown">Crime Hardness</label>
          <select
            name="crimeHardness"
            id="dropdown"
            value={Crime_Info.crimeHardness}
            onChange={handleChange}
          >
            <option value="default" selected>
              Select Crime Hardness
            </option>
            <option value="male">Low</option>
            <option value="female">Medium</option>
            <option value="other">High</option>
          </select>

          <label>Crime Remark</label>
          <br />
          <textarea
            placeholder="Enter Description about Crime"
            name="crimeRemark"
            value={Crime_Info.crimeRemark}
            onChange={handleChange}
            rows={4}
            cols={50}
          />
          <br />

          <label for="picture">Criminal Place Picture : </label>
          <input
            type="file"
            name="criminalPlacePictures"
            value={Crime_Info.criminalPlacePictures}
            onChange={handleChange}
          />

          <label for="picture">Guilty Image : </label>
          <input
            type="file"
            name="guiltyImage"
            value={Crime_Info.guiltyImage}
            onChange={handleChange}
          />
          <br />
            <button type="submit" className="btn btn-primary0">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary0"
              onClick={handleReset}
            >
              Reset
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Crime_Info;


