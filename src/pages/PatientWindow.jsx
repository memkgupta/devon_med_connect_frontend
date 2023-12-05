import React, { useState } from 'react'
import { IoAdd ,IoCloudDownloadOutline} from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
function PatientWindow() {
    function generateRange(start, end) {
        const result = [];
        
        for (let i = start; i <= end; i++) {
          result.push(i);
        }
      
        return result;
      }
      const [isDoctor,setIsDoctor] = useState(true);
      const [isPrescriptionModalOpen, setIsPrescriptionModalOpen] = useState(false);
      const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
      const [isReportModalOpen, setIsReportModalOpen] = useState(false);
      const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
    const patientDetails = {
        name: 'John Doe',
        age: 30,
        contact: '123-456-7890',
        idProofType: 'Aadhar Card',
        idProofNo: '1234 5678 9012',
      };
    
      const doctorDetails = {
        name: 'Dr. Jane Smith',
        specialization: 'Cardiologist',
        contact: '987-654-3210',
        clinic: 'HeartCare Clinic',
      };
    
      const appointmentHistory = [
        { id: 1, date: '2023-01-01', time: '10:00 AM', status: 'Completed' },
        { id: 2, date: '2023-02-15', time: '02:30 PM', status: 'Cancelled' },
        // Add more appointment history entries as needed
      ];
    
      const prescriptions = [
        { id: 1, date: '2023-01-01', medications: 'Medication 1, Medication 2' },
        { id: 2, date: '2023-02-15', medications: 'Medication 3, Medication 4' },
        { id: 3, date: '2023-01-01', medications: 'Medication 1, Medication 2' },
        { id: 4, date: '2023-02-15', medications: 'Medication 3, Medication 4' },
        { id: 5, date: '2023-01-01', medications: 'Medication 1, Medication 2' },
        { id: 6, date: '2023-02-15', medications: 'Medication 3, Medication 4' },
        // Add more prescription entries as needed
      ];
    
      const reports = [
        { id: 1, date: '2023-01-01', type: 'X-Ray Report' },
        { id: 2, date: '2023-02-15', type: 'Blood Test Report' },
        // Add more report entries as needed
      ];
    
  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
    {/* Patient Details */}
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-2">Patient Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <strong>Name:</strong> {patientDetails.name}
        </div>
        <div>
          <strong>Age:</strong> {patientDetails.age}
        </div>
        <div>
          <strong>Contact:</strong> {patientDetails.contact}
        </div>
        <div>
          <strong>ID Proof Type:</strong> {patientDetails.idProofType}
        </div>
        <div>
          <strong>ID Proof No.:</strong> {patientDetails.idProofNo}
        </div>
      </div>
    </div>

    {/* Doctor Details */}
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-2">Doctor Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <strong>Name:</strong> {doctorDetails.name}
        </div>
        <div>
          <strong>Specialization:</strong> {doctorDetails.specialization}
        </div>
        <div>
          <strong>Contact:</strong> {doctorDetails.contact}
        </div>
        <div>
          <strong>Clinic:</strong> {doctorDetails.clinic}
        </div>
      </div>
    </div>

    {/* Sections for Appointment History, Prescriptions, and Reports */}
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-2">Sections</h2>

      {/* Appointment History */}
      <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Appointment History</h3>
         <div className='flex overflow-x-auto space-x-4 p-4 snap-x'>
         {appointmentHistory.map((appointment) => (
            <div key={appointment.id} className="bg-blue-500 p-4 text-white rounded-md mb-2">
              <p>{appointment.date} - {appointment.time}</p>
              <p>Status: {appointment.status}</p>
            </div>
          ))}
           {isDoctor && <div  className="bg-blue-500 snap-center text-white flex items-center p-4 cursor-pointer rounded-md mb-2">
             <span className='text-2xl'><IoAdd /></span>
            </div>}
         </div>
        </div>

      {/* Prescriptions */}
      <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Prescriptions</h3>
       <div className="flex overflow-x-auto space-x-4 p-4 snap-x">
       {isDoctor && <div  className="bg-blue-500 snap-center text-white  flex items-center p-4 cursor-pointer  rounded-md mb-2">
             <span onClick={(e)=>{setIsPrescriptionModalOpen(true)}} className='text-2xl'><IoAdd /></span>
            </div>}
       {prescriptions.map((prescription) => (
            <div key={prescription.id} className="snap-center bg-blue-500 text-white p-4 rounded-md mb-2 " style={{minWidth:"200px"}}>
              <div className='flex items-center'>{prescription.date} - <a href='' className='mx-2' target="_blank" rel="noopener noreferrer" download><IoCloudDownloadOutline/></a></div>
            </div>
          ))}
        
       </div>
        </div>

      {/* Reports */}
      <div>
          <h3 className="text-xl font-bold mb-2">Reports</h3>
          <div className='flex overflow-x-auto space-x-4 p-4 snap-x items-center'>
          {isDoctor && <div  className="bg-blue-500 snap-center text-white  flex items-center p-4 cursor-pointer   rounded-md mb-2">
             <span onClick={(e)=>{setIsReportModalOpen(true)}} className='text-2xl'><IoAdd /></span>
            </div>}
          {reports.map((report) => (
            <div key={report.id} className="bg-blue-500 snap-center text-white p-4 rounded-md mb-2">
              <p>{report.date} - Type: {report.type} </p>
              <div className='flex items-center mt-2 justify-center'> <a href='' className='mx-2' target="_blank" rel="noopener noreferrer" download><IoCloudDownloadOutline/></a></div>
            </div>
          ))}
     
          </div>
          <div>

            {/* Modals */}

{/* Prescription Modal */}
      <PrescriptionModal isOpen={isPrescriptionModalOpen} onClose={(e)=>{setIsPrescriptionModalOpen(false)}} />
      {/* Reports Modal */}
      <ReportModal isOpen={isReportModalOpen} onClose={(e)=>{setIsReportModalOpen(false)}} />
    </div>
        </div>
    </div>
  </div>
  )
}
const PrescriptionModal = ({ isOpen, onClose }) => {
    return (
      <>
        {isOpen && (
          <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-md shadow-md">
              <div className="flex justify-end">
                <button className="text-gray-500 bg-red-500  hover:text-gray-700 p-2 rounded-md" onClick={onClose}>
                <RxCross1 />
                </button>
              </div>
              <h2 className="text-2xl font-bold mb-4">Add New Prescription</h2>
              <p>This is the content of the modal.</p>
            </div>
          </div>
        )}
      </>
    );
  };
  const ReportModal = ({ isOpen, onClose }) => {
    return (
      <>
        {isOpen && (
          <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-md shadow-md">
              <div className="flex justify-end">
                <button className="text-gray-500 bg-red-500  hover:text-gray-700 p-2 rounded-md" onClick={onClose}>
                <RxCross1 />
                </button>
              </div>
              <h2 className="text-2xl font-bold mb-4">Add New Report</h2>
              <p>This is the content of the modal.</p>
            </div>
          </div>
        )}
      </>
    );
  };
export default PatientWindow