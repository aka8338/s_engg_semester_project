import { isFuture, parseISO } from 'date-fns';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './form.css';

/**
 * Represents a signup form for user registration.
 * @component
 */
const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        role: '',
        username: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    /**
     * Handles input changes in the form fields.
     * @param {Event} event - The input change event.
     */
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    }

    /**
     * Validates the form fields.
     * @returns {boolean} - Whether the form is valid or not.
     */
    const validate = () => {
        const { firstName, lastName, dateOfBirth, gender, role, username, phoneNumber, email, password, confirmPassword } = formData;
        const newErrors = {};

        if (!firstName) newErrors.firstName = '* This field is required';
        if (!lastName) newErrors.lastName = '* This field is required';
        if (!dateOfBirth) newErrors.dateOfBirth = '* Date of birth is required';
        if (isFuture(parseISO(dateOfBirth))) newErrors.dateOfBirth = '* Date of birth cannot be in the future';
        if (!gender) newErrors.gender = '* Gender is required';
        if (!role) newErrors.role = '* This field is required';

        const usernameRegex = /^[a-z0-9]{6,}$/;
        if (!usernameRegex.test(username)) newErrors.username = '* Username must have at least 6 characters, and contain only small letters and numbers';

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneNumber)) newErrors.phoneNumber = '* Invalid phone number';

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) newErrors.email = '* Invalid email address';

        if (password.length < 6) newErrors.password = '* Password must be at least 6 characters long';
        if (password !== confirmPassword) newErrors.confirmPassword = '* Passwords do not match';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    /**
     * Handles form submission.
     * If the form is valid, redirects to the dashboard.
     * @param {Event} event - The form submit event.
     */
   const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            // Handle form submission
            navigate('/dashboard');
        }
    }

    return (
        <section className="containerr">
            <h1 className = 'container-h1'>Create an Account</h1>
            <p>Already have an account? <Link className='link' to="/Login">Login</Link></p>
            <form onSubmit={handleSubmit} noValidate className = 'form'>
                <label className='label'>
                    First Name<br />
                    <input className = 'input' type='text' name='firstName' value={formData.firstName} onChange={handleChange} /><br />
                    {errors.firstName && <div className="error">{errors.firstName}</div>}
                </label>
                <label className='label'> 
                    Last Name<br />
                    <input className = 'input' type='text' name='lastName' value={formData.lastName} onChange={handleChange}/><br />
                    {errors.lastName && <div className="error">{errors.lastName}</div>}
                </label>
                <label className='label'> 
                    Date of Birth<br />
                    <input className = 'input' type='date' name='dateOfBirth' value={formData.dateOfBirth} onChange={handleChange}/><br />
                    {errors.dateOfBirth && <div className="error">{errors.dateOfBirth}</div>}
                </label>
                <label className='label'>
                    Gender<br />
                    <select className = 'select' name='gender' value={formData.gender} onChange={handleChange}>
                        <option value="">Please select</option> 
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    {errors.gender && <div className="error">{errors.gender}</div>}
                </label>
                <label className='label'>
                    Role<br />
                    <select className = 'select' name='role' value={formData.role} onChange={handleChange}>
                        <option value="">Please select</option> 
                        <option value="Patient">Patient</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Lab Technician">Lab Technician</option>
                        <option value="Radiologist">Radiologist</option>
                        <option value="Pharmacist">Pharmacist</option>
                        <option value="Receptionist">Receptionsit</option>
                        <option value="Human Resource">Human Resource</option>
                        <option value="Finance">Finance</option>
                        <option value="Manager">Manager</option>
                        <option value="Content Creator">Content Creator</option>
                    </select><br />
                    {errors.role && <div className="error">{errors.role}</div>}
                </label>
                <label className='label'>
                    Choose a username<br />
                    <input className = 'input' type='text' name='username' value={formData.username} onChange={handleChange}/><br />
                    {errors.username && <div className="error">{errors.username}</div>}
                </label>
                <label className='label'>
                    Phone Number<br />
                    <input className = 'input' type='tel' name='phoneNumber' value={formData.phoneNumber} placeholder='ex: 0912345678' onChange={handleChange}/><br />
                    {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
                </label>
                <label className='label'>
                    Email<br />
                    <input className = 'input' type='email' name='email' value={formData.email} onChange={handleChange}/><br />
                    {errors.email && <div className="error">{errors.email}</div>}
                </label>
                <label className='label'>
                    Password<br />
                    <input className = 'input' type='password' name='password' value={formData.password} onChange={handleChange}/><br />
                    {errors.password && <div className="error">{errors.password}</div>}
                </label>
                <label className='label'>
                    Confirm Password<br />
                    <input className = 'input' type='password' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange}/><br />
                    {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
                </label>

                <button className = 'button' type='submit'>Signup</button>
            </form>
        </section>
    );
}

export default Signup;
