import "./Mentor.css";

import React, { useState } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Mentor = () => {
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState([]);
  const idealMarks = [90, 90, 90, 90]; // Ideal marks for comparison

  const handleResultClick = (data) => {
    setShowResult(true);
    setResultData(data);
    setTimeout(() => showResults(data), 0); // Ensure chart is rendered after state updates
  };

  const showResults = (data) => {
    const subjectCtx = document.getElementById('subjectChart').getContext('2d');
    new Chart(subjectCtx, {
      type: 'pie',
      data: {
        labels: ['Student Progress', 'Class Feedback', 'Engagement', 'Other'],
        datasets: [{
          data: data,
          backgroundColor: ['#6e45e2', '#88d3ce', '#e27145', '#45e27b'],
          borderColor: '#fff',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
            }
          }
        }
      }
    });

    const termCtx = document.getElementById('termChart').getContext('2d');
    new Chart(termCtx, {
      type: 'bar',
      data: {
        labels: ['Mentorship Impact', 'Student Growth', 'Guidance', 'Feedback'],
        datasets: [{
          label: 'Score',
          data: data,
          backgroundColor: ['#6e45e2', '#88d3ce', '#e27145', '#45e27b'],
          borderColor: '#fff',
          borderWidth: 1
        }, {
          label: 'Ideal Score',
          data: idealMarks,
          backgroundColor: '#ddd',
          borderColor: '#000',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 10
            }
          }
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
            }
          }
        }
      }
    });
  };

  const raiseQuery = () => {
    const query = prompt("Enter your query:");
    if (query) {
      alert(`Your query has been submitted: ${query}`);
    } else {
      alert("Query cannot be empty.");
    }
  };

  return (
    <div className="container">
      <div className="header">Mentor Dashboard</div>
      <div className="button-container">
        <button onClick={() => handleResultClick([85, 90, 78, 82])}>Mentor Report 1</button>
        <button onClick={() => handleResultClick([88, 85, 80, 89])}>Mentor Report 2</button>
        <button onClick={() => handleResultClick([87, 88, 79, 85])}>Final Mentorship Impact</button>
      </div>

      {showResult && (
        <div id="resultContainer" className="result-container">
          <div id="pieChartContainer">
            <canvas id="subjectChart" width="300" height="300"></canvas>
          </div>
          <div id="barChartContainer">
            <canvas id="termChart" width="300" height="300"></canvas>
          </div>
          <button onClick={raiseQuery}>🗣 Raise a Query</button>
        </div>
      )}

      <div className="result-card">
        <h3>Mentor Report 1</h3>
        <p>Student Progress: 85</p>
        <p>Class Feedback: 90</p>
        <p>Engagement: 78</p>
        <p>Other: 82</p>
      </div>
      <div className="result-card">
        <h3>Mentor Report 2</h3>
        <p>Student Progress: 88</p>
        <p>Class Feedback: 85</p>
        <p>Engagement: 80</p>
        <p>Other: 89</p>
      </div>
      <div className="result-card">
        <h3>Final Mentorship Impact</h3>
        <p>Student Progress: 87</p>
        <p>Class Feedback: 88</p>
        <p>Engagement: 79</p>
        <p>Other: 85</p>
      </div>
    </div>
  );
};

export default Mentor;
