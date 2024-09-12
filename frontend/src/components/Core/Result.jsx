import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Result.css'; // Assuming you have the CSS in a separate file

const Result = () => {
    const [resultData, setResultData] = useState([85, 90, 78, 82]); // Initial data (e.g., Term 1)
    const idealMarks = [90, 90, 90, 90]; // Ideal marks for comparison (Math, Science, English, History)

    // Refs to store the chart instances
    const subjectChartRef = useRef(null);
    const termChartRef = useRef(null);

    // useEffect to ensure charts render after component mount
    useEffect(() => {
        if (document.getElementById('subjectChart') && document.getElementById('termChart')) {
            renderCharts(resultData);
        }

        // Cleanup the charts when component unmounts or data changes
        return () => {
            if (subjectChartRef.current) {
                subjectChartRef.current.destroy(); // Destroy old instance
            }
            if (termChartRef.current) {
                termChartRef.current.destroy(); // Destroy old instance
            }
        };
    }, [resultData]);

    // Function to render both the pie and bar charts
    const renderCharts = (data) => {
        const subjectCtx = document.getElementById('subjectChart').getContext('2d');
        const termCtx = document.getElementById('termChart').getContext('2d');

        // Destroy previous instances if they exist
        if (subjectChartRef.current) {
            subjectChartRef.current.destroy();
        }
        if (termChartRef.current) {
            termChartRef.current.destroy();
        }

        // Pie chart for subject distribution
        subjectChartRef.current = new Chart(subjectCtx, {
            type: 'pie',
            data: {
                labels: ['Math', 'Science', 'English', 'History'],
                datasets: [{
                    data: data,
                    backgroundColor: ['#6e45e2', '#88d3ce', '#e27145', '#45e27b'],
                    borderColor: '#fff',
                    borderWidth: 1,
                }],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                return `${tooltipItem.label}: ${tooltipItem.raw}`;
                            },
                        },
                    },
                },
            },
        });

        // Bar chart for term-wise performance
        termChartRef.current = new Chart(termCtx, {
            type: 'bar',
            data: {
                labels: ['Math', 'Science', 'English', 'History'],
                datasets: [{
                    label: 'Marks',
                    data: data,
                    backgroundColor: ['#6e45e2', '#88d3ce', '#e27145', '#45e27b'],
                    borderColor: '#fff',
                    borderWidth: 1,
                }, {
                    label: 'Ideal Marks',
                    data: idealMarks,
                    backgroundColor: '#ddd',
                    borderColor: '#000',
                    borderWidth: 1,
                }],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 10,
                        },
                    },
                },
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                return `${tooltipItem.label}: ${tooltipItem.raw}`;
                            },
                        },
                    },
                },
            },
        });
    };

    // Function to update the data and show the charts
    const showResults = (data) => {
        setResultData(data);
        document.getElementById('resultContainer').classList.remove('hidden');
    };

    // Function to raise a query (example implementation)
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
            <div className="header">Student Results</div>
            <div className="button-container">
                <button onClick={() => showResults([85, 90, 78, 82])}>Term 1 Results</button>
                <button onClick={() => showResults([88, 85, 80, 89])}>Term 2 Results</button>
                <button onClick={() => showResults([87, 88, 79, 85])}>Final Results</button>
            </div>
            <div id="resultContainer" className="result-container hidden">
                <div id="pieChartContainer">
                    <canvas id="subjectChart" width="300" height="300"></canvas>
                </div>
                <div id="barChartContainer">
                    <canvas id="termChart" width="300" height="300"></canvas>
                </div>
                <button onClick={raiseQuery}>🗣 Raise a Query</button>
            </div>
        </div>
    );
};

export default Result;
