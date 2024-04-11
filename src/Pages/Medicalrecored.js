import React, { useState } from 'react';

const MedicalRecords = () => {
  // Mock medical records data
  const medicalRecords = {
    imagingResults: [
      { type: '', description: '' },
    ],
    labResults: [
      { testName: '', resultValue: '' },
    ],
    prescriptions: [
      { medication: '', instructions: '' },
    ],
  };

  // State to control the visibility of medical records
  const [showLists, setShowLists] = useState(false);

  // Function to toggle visibility of medical records
  const toggleListsVisibility = () => {
    setShowLists(!showLists);
  };

  return (
    <div>
      <h1>Medical Records</h1>

      {/* Button to toggle visibility of medical records */}
      <button onClick={toggleListsVisibility}>
        {showLists ? 'Hide' : 'Show '}
      </button>

      {/* Render medical records if showLists is true */}
      {showLists && (
        <div>
          {/* Imaging Results Section */}
          <h2>Imaging Results</h2>
          <ul>
            {medicalRecords.imagingResults.map((result, index) => (
              <li key={index}>
                {/* Display Type and Description */}
                <strong>Type of image 1:</strong>
                <br></br>
                <textarea value={result.type} readOnly />
                <br></br>
                <strong>Description for image 1:</strong>
                <br></br>
                <textarea value={result.description} readOnly />
                    <br></br>
                <strong>Type of image 2:</strong>
                <br></br>
                <textarea value={result.type} readOnly />
                <br></br>
                <strong>Description for image 2:</strong>
                <br></br>
                <textarea value={result.description} readOnly />
              </li>
            ))}
          </ul>

          {/* Lab Results Section */}
          <h3>Lab Results</h3>
          <ul>
            {medicalRecords.labResults.map((result, index) => (
              <li key={index}>
                {/* Display Test Name and Result Value */}
                <strong>Test Name 1:</strong>
                <br></br>
                <textarea value={result.testName} readOnly />
                <br></br>
                <strong>Result Value for test 1:</strong>
                <br></br>
                <textarea value={result.resultValue} readOnly />
                <br></br>
                <strong>Test Name 2:</strong>
                <br></br>
                <textarea value={result.testName} readOnly />
                <br></br>
                <strong>Result Value for test 2:</strong>
                <br></br>
                <textarea value={result.resultValue} readOnly />
              </li>
            ))}
          </ul>

          {/* Prescriptions Section */}
          <h3>Prescriptions</h3>
          <ul>
            {medicalRecords.prescriptions.map((prescription, index) => (
              <li key={index}>
                {/* Display Medication and Instructions */}
                <strong>Medication 1:</strong>
                    <br></br>
                <textarea value={prescription.medication} readOnly />
                    <br></br>
                <strong>Instructions for medication 1:</strong>
                    <br></br>
                <textarea value={prescription.instructions} readOnly />
                        <br>
                        </br>
                <strong>Medication 2:</strong>
                    <br></br>
                <textarea value={prescription.medication} readOnly />
                <br></br>
                <strong>Instructions for medication 2:</strong>
                <br></br>
                <textarea value={prescription.instructions} readOnly />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MedicalRecords;
