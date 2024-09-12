import './MyTeachers.css';
import React from 'react';

const teachers = [
    { id: 1, name: 'Aniket ', subject: 'Mathematics', image: 'https://i.ibb.co/WKhg4nP/images.jpg' },
    { id: 2, name: 'Aastha', subject: 'Science', image: 'https://i.ibb.co/bKQtrJw/images-1.jpg' },
    { id: 3, name: 'Shaantanu', subject: 'English', image: 'https://i.ibb.co/Mpt6VnW/passport-photo-portrait-young-man-260nw-2437772333.webp' },
    // Add more teachers as needed
];

const MyTeachers = () => {
    const handleChatClick = (teacher) => {
        // Handle chat button click (e.g., open a chat window or component)
        alert(`Start a chat with ${teacher.name}`);
    };

    return (
        <div className="my-teachers-container">
            {teachers.map(teacher => (
                <div key={teacher.id} className="teacher-card">
                    <img src={teacher.image} alt={teacher.name} className="teacher-image" />
                    <div className="teacher-info">
                        <h3 className="teacher-name">{teacher.name}</h3>
                        <p className="teacher-subject">{teacher.subject}</p>
                    </div>
                    <button 
                        className="chat-button" 
                        onClick={() => handleChatClick(teacher)}
                    >
                        <i className="chat-icon">💬</i>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default MyTeachers;
