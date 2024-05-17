
import React, { useState, useEffect } from "react";
import "./Crime_Predict.css";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import "chart.js/auto"
import revenueData from "../data/revenueData.json";
import sourceData from "../data/sourceData.json";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";

function PredictionPage() {
  const [crimePrediction, setCrimePrediction] = useState({
    crimeType: "",
    crimeTime: "",
    crimeLocation: "",
    guiltyGender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCrimePrediction((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data for prediction
    console.log(crimePrediction);
    // Reset form
    setCrimePrediction({
      crimeType: "",
      crimeTime: "",
      crimeLocation: "",
      guiltyGender: "",
    });
  };

  const handleReset = () => {
    // Reset form
    setCrimePrediction({
      crimeType: "",
      crimeTime: "",
      crimeLocation: "",
      guiltyGender: "",
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
    <Navbar/>
    <div className="container4">
      <header className="header4">
        <h1>Crime Prediction</h1>
      </header>
      <div className="form-container4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="crimeType" className="form-label4">
              Crime Type
            </label>
            <select
              className="form-select4"
              name="crimeType"
              id="crimeType"
              value={crimePrediction.crimeType}
              onChange={handleChange}
            >
              <option value="">Select Crime Types</option>
              <option value="option1">Option 01</option>
              <option value="option2">Option 02</option>
              <option value="option3">Option 03</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="crimeTime" className="form-label4">
              Crime Time
            </label>
            <input
              type="date"
              className="form-control4"
              name="crimeTime"
              id="crimeTime"
              value={crimePrediction.crimeTime}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="crimeLocation" className="form-label4">
              Crime Location
            </label>
            <input
              type="text"
              className="form-control4"
              placeholder="Enter Your Location"
              name="crimeLocation"
              id="crimeLocation"
              value={crimePrediction.crimeLocation}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="guiltyGender" className="form-label4">
              Guilty Gender
            </label>
            <select
              className="form-select4"
              name="guiltyGender"
              id="guiltyGender"
              value={crimePrediction.guiltyGender}
              onChange={handleChange}
            >
              <option value="">Select Guilty Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-primary4 me-2">
              Predict
            </button>
            <button type="button" className="btn btn-secondary4" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
      


    <div className="Section--two">
      <div className="charts-container4">
        <div className="chart4">
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
        <div className="chart4">
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
        <div className="chart4">
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
    <Footer />

    </>
  );
}

export default PredictionPage;
