// AppointmentForm.js
import React, { useEffect, useState } from 'react';
import { TiTick } from 'react-icons/ti';
import { useNavigate, useOutlet, useOutletContext } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";
import {setFormData} from '../../redux/appointment';
import { useDispatch, useSelector } from 'react-redux';
function AppointmentForm() {
  const toDate=(date)=>{
    const dateObject = new Date(date);
    return dateObject.toISOString().split('T')[0];
  }
  const dispatch = useDispatch();
  const appointment = useSelector(state=>state.appointment);
    const [formData2, setformData2] = useState({
        files:[],
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
// const [formData,setFormData] = useOutletContext().form;
const [currentStep,setCurrentStep] = useOutletContext().step;
  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setformData2((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 const handleAddReports=(e)=>{

 }
 const [reports,setReports] = useState([]);

 const handleChangeReportFile=(name,index,e)=>{
  e.preventDefault();
  const newArr = [...reports];
  newArr[index]={...newArr[index],[name]:name==='file'?e.target.files[0]:e.target.value}
  console.log(newArr);
setReports(newArr);
 }
const handleAddReport = (e)=>{
  setReports([...reports,{title:"",file:null}]);

}
const removeReport = (index)=>{
  let newArr = [...reports]
  newArr = newArr.filter((_, i) => i !== index);
  setReports(newArr);
}
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    const files = [];
    const titles = [];
    console.log(reports)
    reports.forEach((report)=>{
files.push(report.file);
titles.push(report.title);
    });
    setformData2(prev=>({...prev,files:files,reports:titles}));
    
    console.log('Form submitted:', formData2);
    
    dispatch(setFormData(formData2))
    navigate('../review')
  };
  const [timeSlotString,setTimeSlotString]=useState();
useEffect(()=>{
setCurrentStep(1);

},[]);
useEffect(()=>{

  if(appointment&&appointment.selectedTimeSlot&&appointment.selectedDate){
    setformData2(appointment.formData);
    setformData2((prev)=>({...prev,timeSlot:appointment.selectedTimeSlot,date:appointment.selectedDate.split('T')[0]}))

  }
},[appointment])
useEffect(()=>{
  if(appointment&&appointment.selectedTimeSlot!==null){
setTimeSlotString(JSON.parse(appointment.selectedTimeSlot).startTime+'-'+JSON.parse(appointment.selectedTimeSlot).endTime)
  }
  
},[appointment])

  return (
    <>
    {appointment&&
<>
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
      type="text"
      id="date"
      name="date"
      value={appointment.selectedDate&&appointment.selectedDate.split('T')[0]}
    readOnly
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
      readOnly
      name="timeSlot"
      value={timeSlotString}
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
  {reports.map((report,index)=>{
    return(
      <div className='flex justify-between mt-6 ' key={index}>
      <input type="text" className='grow border-blue-100 outline-blue-100 mx-2 rounded-md' value={report.title} placeholder='Enter The Title Or Brief Description' required onChange={(e)=>{handleChangeReportFile('title',index,e)}}/>
      <input type='file' id={`file-${index}`} hidden className='shrink'  placeholder='Select The pdf file' accept='.pdf , .doc , .docx' onChange={(e)=>{handleChangeReportFile('file',index,e)}}></input>
      <span onClick={(e)=>{document.getElementById(`file-${index}`).click()} } className='bg-blue-200 py-5 text-center p-5 shrink'>{report.file?<TiTick/>:'+'}</span>
      <span className='bg-red-300 p-5 text-white' onClick={(e)=>{removeReport(index)}}><MdDeleteOutline/></span>
    </div>
    )
  })}
  <p className='bg-blue-500 rounded-md w-full m-5 text-white p-2' onClick={(e)=>{handleAddReport(e)}}>+ Add Report</p>
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
</>}
    </>

  );
};

export default AppointmentForm;
