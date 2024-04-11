import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './form.css';

/**
 * Represents a login form for user authentication.
 * @component
 */
const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        role: '',
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

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
     * Handles form submission and performs validation.
     * Redirects to the dashboard on successful login.
     * @param {Event} event - The form submit event.
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = {};

        if (!formData.role) newErrors.role = '* Role is required';
        if (!formData.username) newErrors.username = '* Username is required';
        if (!formData.password) newErrors.password = '* Password is required';

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            // Proceed with login logic
            navigate('/dashboard');
        }
    }

    return (
        <section className="containerr">
            <h1 className='container-h1'>Login to your Account</h1>
            <p className = 'container-p'>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            <form onSubmit={handleSubmit} className='form'>
                <label className = 'label'>
                    Role<br />
                    <select name='role' value={formData.role} onChange={handleChange} className = 'select'>
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
                    Username<br />
                    <input className = 'input' type='text' name='username' value={formData.username} onChange={handleChange} /><br />
                    {errors.username && <div className="error">{errors.username}</div>}
                </label>
                <label className='label'>
                    Password<br />
                    <input className = 'input' type='password' name='password' value={formData.password} onChange={handleChange} /><br />
                    {errors.password && <div className="error">{errors.password}</div>}
                </label>
                <button type='submit' className='button'>Login</button>
            </form>
        </section>
    );
}

export default Login;
