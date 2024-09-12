import React from 'react';
import './attendance.css'; // Import the CSS file
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, PieController, ArcElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, PieController, ArcElement);

export default function Attendance() {
    // Data for the chart
    const data = {
        labels: ['All Day', 'French', 'English', 'Science', 'Music'],
        datasets: [{
            label: 'Absent Hours',
            data: [4, 3, 2, 2, 2],
            backgroundColor: ['#4CAF50', '#FFC107', '#FF9800', '#00BCD4', '#E91E63'],
        }]
    };

    // Configuration for the chart
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            }
        }
    };

    return (
        <div className="container">
            <div className="header">
                <h1>Attendance Tab Information</h1>
                <div className="breadcrumb">
                    <span>Home</span> > <span>Student</span> > <span>Attendance Tab Information</span>
                </div>
                <div className="meta-info">
                    <span>July 10, 2020</span> | <span>Admin</span> | <span>Student</span>
                </div>
            </div>

            <p className="description">It shows student attendance during the academic year with a flowchart and more details about his/her absents in each subject with reasons.</p>

            <div className="attendance-overview">
                <div className="chart-section">
                    <Pie data={data} options={options} />
                </div>
                <div className="subject-info">
                    <h3>Subject Attendance</h3>
                    <table>
                        <thead>
                            <tr><th>Subject</th><th>Attendance</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>French</td><td>75%</td></tr>
                            <tr><td>English</td><td>80%</td></tr>
                            <tr><td>Science</td><td>85%</td></tr>
                            <tr><td>Music</td><td>90%</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="attendance-table">
                <table>
                    <thead>
                        <tr>
                            <th>Absence Day</th>
                            <th>Absence Reason</th>
                            <th>Period Name</th>
                            <th>Teacher Name</th>
                            <th>Subject</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Friday 31, Jan 2020</td><td>5</td><td>P1</td><td>Morgan Holdsworth</td><td>French</td></tr>
                        <tr><td>Friday 31, Jan 2020</td><td>55</td><td>P2</td><td>Selma Alba</td><td>Science</td></tr>
                        <tr><td>Friday 31, Jan 2020</td><td>60</td><td>P3</td><td>Amin Shaya</td><td>Music</td></tr>
                        <tr><td>Thursday 30, Jan 2020</td><td>30</td><td></td><td></td><td>All Day</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}


