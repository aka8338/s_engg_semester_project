import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Medication from './component/medication/Medication.jsx';
import NavBar from './Components/NavBar';
import Dashboard from './Dashboard.js';
import HomePage from './Home-page';
import "./index.css";
import Login from './Login.js';
import AppMash from './Pages/Appointement/AppMash.js';
import Appointment from './Pages/Appointement/Appointment.js';
import Cancel from './Pages/Appointement/Cancel.js';
import New from './Pages/Appointement/New.js';
import Reschedule from './Pages/Appointement/Reschedule.js';
import Feedback from './Pages/Feedback.js';
import MedicalRecords from './Pages/Medicalrecored';
import MedicationTracking from './Pages/MedicationTracking';
import Profile from './Pages/Profile';
import Signup from './Signup.js';
function App() {
  return (
    <div>
      <NavBar />
      <div className='main-con'>
        <Routes>
          <Route path = 'medical-info' element = {<Medication></Medication>}></Route>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/medical-record' element={<MedicalRecords />}></Route>
          <Route path='/medication' element={<MedicationTracking></MedicationTracking>}></Route>
          <Route path='/Feedback' element={<Feedback />}></Route>
          <Route path='/Profile' element={<Profile></Profile>}></Route>
          <Route path='/bookappointment' element={<Appointment />}>
            <Route path='' element={<AppMash />}></Route>
            <Route path='new' element={<New />}></Route>
            <Route path='reschedule' element={<Reschedule />}></Route>
            <Route path='cancel' element={<Cancel />}></Route>
          </Route>
          <Route path = '/Login' element = {<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;