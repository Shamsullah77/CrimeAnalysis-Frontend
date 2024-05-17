import React, { useState, useEffect } from "react";
import "./Crime_Analysis.css";
import axios from 'axios';
import { Line, Bar, Doughnut } from "react-chartjs-2";
import "chart.js/auto"
import revenueData from "../data/revenueData.json";
import sourceData from "../data/sourceData.json";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
function AnalysisPage() {
  const [crimeAnalysis, setCrimeAnalysis] = useState({
    Crime_type: "",
    Crime_date: "",
    Crime_location: "",
    Gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCrimeAnalysis((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/addanalysis', crimeAnalysis)
        .then(res => {
            console.log("Analysis data is submitted successfully");
            // You can handle success response here
        })
        .catch(err => console.log(err.response.data)); // Log error response
  };
  

  const handleReset = () => {
    // Reset form
    setCrimeAnalysis({
      Crime_type: "",
      Crime_date: "",
      Crime_location: "",
      Gender: "",
    });
  };


   // Data for charts
   const revenueLabels = revenueData.map((data) => data.label);
   const revenueValues = revenueData.map((data) => data.value);
   const revenueBackgroundColor = [
     "rgba(43, 63, 229, 0.8)",
     "rgba(250, 192, 19, 0.8)",
     "rgba(253, 135, 135, 0.8)",
   ];
 
   const sourceLabels = sourceData.map((data) => data.label);
   const sourceValues = sourceData.map((data) => data.value);



  return (
    <>
      <Navbar />
      <div className="container3">
        <header className="header3">
          <h1>Crime Analysis</h1>
        </header>
        <h2 className="form-title3">Fill blanks for analysis</h2>
        <div className="form-container3">
          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label htmlFor="crimeType" className="form-label3">Crime_type</label>
              <select className="form-select3" name="Crime_type" id="crimeType" value={crimeAnalysis.Crime_type} onChange={handleChange} >
                <option value="">Select Crime Types</option>
                <option value="option1">Option 01</option>
                <option value="option2">Option 02</option>
                <option value="option3">Option 03</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="crimeTime" className="form-label3">Crime_date</label>
              <input type="date" className="form-control3" name="Crime_date" id="crimeTime" value={crimeAnalysis.Crime_date} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label htmlFor="crimeLocation" className="form-label3">Crime_location</label>
              <input type="text" className="form-control3" placeholder="Enter Your Location" name="Crime_location" id="crimeLocation" value={crimeAnalysis.Crime_location} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label htmlFor="guiltyGender" className="form-label">Gender</label>
              <select className="form-select3" name="Gender" id="guiltyGender" value={crimeAnalysis.Gender} onChange={handleChange} >
                <option value="">Select Guilty Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-3">
              <button type="submit" className="btn btn-primary3 me-2"> Analyze </button>
              <button type="button" className="btn btn-secondary3" onClick={handleReset}>Reset</button>
            </div>
          </form>
        </div>



        
    <div className="Section--two">
      <div className="charts-container3">
        <div className="chart3">
          <h2>Revenue Chart</h2>
          <Bar
            data={{
              labels: revenueLabels,
              datasets: [
                {
                  label: "Revenue",
                  data: revenueValues,
                  backgroundColor: revenueBackgroundColor,
                },
              ],
            }}
          />
        </div>
        <div className="chart3">
          <h2>Cost Chart</h2>
          <Line
            data={{
              labels: revenueLabels,
              datasets: [
                {
                  label: "Cost",
                  data: revenueValues,
                  borderColor: "rgba(255, 99, 132, 1)",
                  borderWidth: 2,
                  fill: false,
                },
              ],
            }}
          />
        </div>
        <div className="chart3">
          <h2>Source Chart</h2>
          <Doughnut
            data={{
              labels: sourceLabels,
              datasets: [
                {
                  data: sourceValues,
                  backgroundColor: revenueBackgroundColor,
                },
              ],
            }}
          />
        </div>
      </div>

      </div>
    </div>

      

      <Footer/>
    </>
  );
}

export default AnalysisPage;
