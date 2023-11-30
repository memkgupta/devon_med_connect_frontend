// AppointmentForm.js
import React, { useEffect, useState } from 'react';
import { useNavigate, useOutlet, useOutletContext } from 'react-router-dom';

function AppointmentForm() {
    const [formData2, setformData2] = useState({
        patientName: '',
        age: '',
        contact: '',
        idProofType: '',
        idProofNo: '',
        date: '',
        timeSlot: '',
        problemDescription: '',
        reports: null,
      });
const [formData,setFormData] = useOutletContext().form;
const [currentStep,setCurrentStep] = useOutletContext().step;
  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setformData2((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? e.target.files[0] : value,
    }));
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setFormData(formData2);
    console.log('Form submitted:', formData2);
    
    navigate('../review')
  };
useEffect(()=>{
setCurrentStep(1);
},[])

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
    <h2 className="text-2xl font-bold mb-6">Patient Information Form</h2>
    <form onSubmit={handleSubmit}>
      {/* Other input fields */}
      <div className="mb-4">
        <label htmlFor="patientName" className="block text-sm font-medium text-gray-600">
          Patient Name
        </label>
        <input
          type="text"
          id="patientName"
          name="patientName"
          value={formData2.patientName}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="age" className="block text-sm font-medium text-gray-600">
          Age
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData2.age}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="contact" className="block text-sm font-medium text-gray-600">
          Contact
        </label>
        <input
          type="tel"
          id="contact"
          name="contact"
          value={formData2.contact}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="idProofType" className="block text-sm font-medium text-gray-600">
          ID Proof Type
        </label>
        <select
          id="idProofType"
          name="idProofType"
          value={formData2.idProofType}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        >
          <option value="">Select ID Proof Type</option>
          <option value="aadhar">Aadhar Card</option>
          <option value="driving_license">Driving License</option>
          <option value="passport">Passport</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="idProofNo" className="block text-sm font-medium text-gray-600">
          ID Proof No.
        </label>
        <input
          type="text"
          id="idProofNo"
          name="idProofNo"
          value={formData2.idProofNo}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium text-gray-600">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData2.date}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="timeSlot" className="block text-sm font-medium text-gray-600">
          Time Slot
        </label>
        <input
          type="text"
          id="timeSlot"
          name="timeSlot"
          value={formData2.timeSlot}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="problemDescription" className="block text-sm font-medium text-gray-600">
          Problem Description
        </label>
        <textarea
          id="problemDescription"
          name="problemDescription"
          value={formData2.problemDescription}
          onChange={handleChange}
          rows="4"
          className="mt-1 p-2 w-full border rounded-md"
          required
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="reports" className="block text-sm font-medium text-gray-600">
          Reports (Optional)
        </label>
        <input
          type="file"
          id="reports"
          name="reports"
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  );
};

export default AppointmentForm;
