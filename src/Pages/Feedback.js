
import { useState } from 'react';
import './Feedback.css';
  // Define a functional component named Form
  function Feedback() {
    
  
  

    const [showOverallForm, setShowOverallForm] = useState(false);
    const [showThankYouMessage, setShowThankYouMessage] = useState(false);
    const [selectedDepartment, setSelectedDepartment] = useState(null);

    // Function to handle department selection
    const handleDepartmentSelection = (event) => {
      const selectedDept = event.target.value;
      setSelectedDepartment(selectedDept); //selects target value from dropdown menu
      setShowOverallForm(false); //Hide overall form when department is selected
    };



    // Function to handle overall satisfaction button click
    const handleOverallButtonClick = () => {
      setShowOverallForm(true); // Show overall form when button is clicked
    };
    // Function to handle form submission
    const handleSubmit = () => {
      setShowThankYouMessage(true); //display thank you message when form is submitted
      setShowOverallForm(false); // hide overallForm
      setSelectedDepartment(false); //hide department




    };
    // Function to render overall satisfaction form
    function OverAllform() {
      return (
        <div id="overall-satisfaction">
          
          <h2 className='over-header'>Hospital Feedback</h2>
          <table className="feedback-table">
            <thead>
              <tr>
                <th rowSpan="1" id='head'>Aspect</th>
                <th colSpan="6">Satisfaction Level</th>
              </tr>
              <tr>
                <th></th>
                <th>Very satisfied</th>
                <th>Satisfied</th>
                <th>Neutral</th>
                <th>Unsatisfied</th>
                <th>Very unsatisfied</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Practitioner Knowledge</td>
                <td><input type="radio" name="knowledge" value="Very satisfied" /></td>
                <td><input type="radio" name="knowledge" value="Satisfied" /></td>
                <td><input type="radio" name="knowledge" value="Neutral" /></td>
                <td><input type="radio" name="knowledge" value="Unsatisfied" /></td>
                <td><input type="radio" name="knowledge" value="Very unsatisfied" /></td>
              </tr>
              <tr>
                <td>Practitioner Kindness</td>
                <td><input type="radio" name="kindness" value="Very satisfied" /></td>
                <td><input type="radio" name="kindness" value="Satisfied" /></td>
                <td><input type="radio" name="kindness" value="Neutral" /></td>
                <td><input type="radio" name="kindness" value="Unsatisfied" /></td>
                <td><input type="radio" name="kindness" value="Very unsatisfied" /></td>
              </tr>
              <tr>
                <td>Practitioner Communication Skill</td>
                <td><input type="radio" name="communication" value="Very satisfied" /></td>
                <td><input type="radio" name="communication" value="Satisfied" /></td>
                <td><input type="radio" name="communication" value="Neutral" /></td>
                <td><input type="radio" name="communication" value="Unsatisfied" /></td>
                <td><input type="radio" name="communication" value="Very unsatisfied" /></td>
              </tr>
              <tr>
                <td>Waiting Time</td>
                <td><input type="radio" name="waiting" value="Very satisfied" /></td>
                <td><input type="radio" name="waiting" value="Satisfied" /></td>
                <td><input type="radio" name="waiting" value="Neutral" /></td>
                <td><input type="radio" name="waiting" value="Unsatisfied" /></td>
                <td><input type="radio" name="waiting" value="Very unsatisfied" /></td>
              </tr>
              <tr>
                <td>Hygiene</td>
                <td><input type="radio" name="hygiene" value="Very satisfied" /></td>
                <td><input type="radio" name="hygiene" value="Satisfied" /></td>
                <td><input type="radio" name="hygiene" value="Neutral" /></td>
                <td><input type="radio" name="hygiene" value="Unsatisfied" /></td>
                <td><input type="radio" name="hygiene" value="Very unsatisfied" /></td>
              </tr>
              <tr>
                <td>Quality of Care</td>
                <td><input type="radio" name="care" value="Very satisfied" /></td>
                <td><input type="radio" name="care" value="Satisfied" /></td>
                <td><input type="radio" name="care" value="Neutral" /></td>
                <td><input type="radio" name="care" value="Unsatisfied" /></td>
                <td><input type="radio" name="care" value="Very unsatisfied" /></td>
              </tr>
              <tr>
                <td>Rate your Experience</td>
                <td><input type="radio" name="experience" value="Very satisfied" /></td>
                <td><input type="radio" name="experience" value="Satisfied" /></td>
                <td><input type="radio" name="experience" value="Neutral" /></td>
                <td><input type="radio" name="experience" value="Unsatisfied" /></td>
                <td><input type="radio" name="experience" value="Very unsatisfied" /></td>
              </tr>
            </tbody>
          </table>

          <textarea id="improvement" name="improvement" placeholder="How could we improve our service?" rows="4" required></textarea>
          <br /><br />
          <button className='mybut' type="button" onClick={handleSubmit}>Submit</button>
        </div>
      );
    }

    // Function to render department feedback form
    function DepartmentForm() {
      return (
        <div id="overall-satisfaction">
          <h2 className='over-header'>Hospital Department Feedback Form</h2>
          <table className="feedback-table">
            <thead>
              <tr>
                <th rowSpan="1" id='head'>Aspect</th>
                <th colSpan="6">Satisfaction Level</th>
              </tr>
              <tr>
                <th></th>
                <th>Very satisfied</th>
                <th>Satisfied</th>
                <th>Neutral</th>
                <th>Unsatisfied</th>
                <th>Very unsatisfied</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> Technician Knowledge</td>
                <td><input type="radio" name="knowledge" value="Very satisfied" /></td>
                <td><input type="radio" name="knowledge" value="Satisfied" /></td>
                <td><input type="radio" name="knowledge" value="Neutral" /></td>
                <td><input type="radio" name="knowledge" value="Unsatisfied" /></td>
                <td><input type="radio" name="knowledge" value="Very unsatisfied" /></td>
              </tr>
              <tr>
                <td>Technician Kindness</td>
                <td><input type="radio" name="kindness" value="Very satisfied" /></td>
                <td><input type="radio" name="kindness" value="Satisfied" /></td>
                <td><input type="radio" name="kindness" value="Neutral" /></td>
                <td><input type="radio" name="kindness" value="Unsatisfied" /></td>
                <td><input type="radio" name="kindness" value="Very unsatisfied" /></td>
              </tr>
              <tr>
                <td>Technician Communication Skill</td>
                <td><input type="radio" name="communication" value="Very satisfied" /></td>
                <td><input type="radio" name="communication" value="Satisfied" /></td>
                <td><input type="radio" name="communication" value="Neutral" /></td>
                <td><input type="radio" name="communication" value="Unsatisfied" /></td>
                <td><input type="radio" name="communication" value="Very unsatisfied" /></td>
              </tr>

              <tr>
                <td>Hygiene</td>
                <td><input type="radio" name="hygiene" value="Very satisfied" /></td>
                <td><input type="radio" name="hygiene" value="Satisfied" /></td>
                <td><input type="radio" name="hygiene" value="Neutral" /></td>
                <td><input type="radio" name="hygiene" value="Unsatisfied" /></td>
                <td><input type="radio" name="hygiene" value="Very unsatisfied" /></td>
              </tr>
              <tr>
                <td>Quality of Service</td>
                <td><input type="radio" name="care" value="Very satisfied" /></td>
                <td><input type="radio" name="care" value="Satisfied" /></td>
                <td><input type="radio" name="care" value="Neutral" /></td>
                <td><input type="radio" name="care" value="Unsatisfied" /></td>
                <td><input type="radio" name="care" value="Very unsatisfied" /></td>
              </tr>
              <tr>
                <td>Rate Technician Experience</td>
                <td><input type="radio" name="experience" value="Very satisfied" /></td>
                <td><input type="radio" name="experience" value="Satisfied" /></td>
                <td><input type="radio" name="experience" value="Neutral" /></td>
                <td><input type="radio" name="experience" value="Unsatisfied" /></td>
                <td><input type="radio" name="experience" value="Very unsatisfied" /></td>
              </tr>
            </tbody>
          </table>

          <textarea id="improvement" name="improvement" placeholder="Comment..." rows="4" required></textarea>
          <br /><br />
          <button type="button" className='mybut' onClick={handleSubmit}>Submit</button>
        </div>
      );
    }






    return (
      //landing page for the feedback
      <div className='container' style={{color: 'black', textAlign: 'center', fontSize: '20px', fontWeight:'bold'}}>
        {!showOverallForm && !selectedDepartment && (
          <form>
            <p className='container-p-tag'>Welcome to our hospital feedback submission form. In order to give feedback, please choose your feedback type:<span className = 'cont-span'> department</span> or <span className = 'cont-span'>overall satisfaction</span></p>

            <label htmlFor="department" className='LABEL'>Choose a department:</label>
            <select id="department" name="department">
              <option value="Select">Select</option>
              <option value="Doctors" onClick={handleDepartmentSelection}>Doctors</option>
              <option value="Pharmacists" onClick={handleDepartmentSelection}>Pharmacists</option>
              <option value="Lab Technicians" onClick={handleDepartmentSelection}>Lab Technicians</option>
              <option value="Radiologists" onClick={handleDepartmentSelection}>Radiologists</option>
              <option value="Receptionist" onClick={handleDepartmentSelection}>Receptionist</option>
              <option value="Manager" onClick={handleDepartmentSelection}>Manager</option>
            </select>
            <button id='overall' className='mybut' onClick={handleOverallButtonClick}>Overall satisfaction</button>
            <br /><br />
            <div className='second'></div>
          </form>
        )}

        {showOverallForm && OverAllform()}



        {selectedDepartment && <DepartmentForm />}

        {showThankYouMessage && (

          <div className="thank-you-message">
            <p>Thank you for your feedback!</p>
            <button className='mybut' onClick={() => setShowThankYouMessage(false)}>Close</button>
          </div>
        )}
      </div>
    );
  };



    

export default Feedback;
