import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import '../App.css';

function NavBar() {
  return (
    <div className="navbar">
      <header>
        <Link to="/">Home</Link>
        <Link to="/bookappointment">Appointment</Link>
        <Link to="/medication">Medication Tracking</Link>
        <Link to="/medical-record">Medical Record</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/Feedback" className="active">Feedback</Link>
        <Link to="/content">Content</Link>
      </header>
    </div>
  );
}

export default NavBar;
