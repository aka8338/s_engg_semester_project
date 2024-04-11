import './Appointment.css'
import { NavLink, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
export default function Appointment() {

    const buttonClicked = localStorage.getItem('buttonClicked');
    return (
        <div className='main-app'>
            <div className="app-container">
                <div className = "option-container">
                    <NavLink to = '/bookappointment/new' className='app-navigation'>
                        New
                    </NavLink>
                    <NavLink to = '/bookappointment/reschedule' className='app-navigation' >
                        Reschedule 
                    </NavLink>
                    <NavLink to = '/bookappointment/cancel' className='app-navigation' >
                        Cancel 
                    </NavLink>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}