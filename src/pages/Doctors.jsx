import React, { useCallback, useEffect, useState } from 'react'
import Doctor from '../components/cards/Doctor';
import { useDispatch, useSelector } from 'react-redux';
import { asyncLoadDoctors } from '../redux/doctors';

function Doctors() {
  const dispatch = useDispatch();
  const doctors = useSelector((state)=>state.doctor);
    const range = (start, end) => {
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
      };
      const [currentPage,setCurrentPage] = useState(1);
      const onPageChange = (page)=>{
        console.log(page);
        setCurrentPage(page);
      }
      const[totalPages,setTotalPages]= useState(20)
    const [specializations,setSpecializations] = useState([{ title: "General Physician", _id: "01" },
    { title: "Dermatologist", _id: "02" },
    { title: "Cardiology", _id: "03" }]);

    const [cities,setCities]=useState(["New Delhi","Greater Noida","Kasna","Jaipur"]);
    // const [filteredDocs,setFilteredDocs]= useState([]);
const [filteredDocs,setFilteredDocs] = useState([]);
    const [docs,setDocs]=useState([{
    id: "doc01",
    name: "Dr. John Smith",
    imageUrl: "src/assets/doc.jpg",
    specialization: "General Physician",
    rating: 4.5,
    description: "Experienced general physician with a focus on preventive care.",
    address: "123 Medical Street, Cityville",
    isRecommended:true
  },
  {
    id: "doc02",
    name: "Dr. Emily Johnson",
    imageUrl: "src/assets/doc.jpg",
    specialization: "Dermatologist",
    rating: 4.8,
    description: "Skilled dermatologist providing personalized skincare solutions.",
    address: "456 Dermatology Avenue, Townsville",
    isRecommended:false
  },
  {
    id: "doc03",
    name: "Dr. Michael Brown",
    imageUrl: "src/assets/doc.jpg",
    specialization: "Cardiologist",
    rating: 4.2,
    description: "Cardiologist dedicated to heart health and cardiovascular care.",
    address: "789 Cardiology Lane, Heartsville",
    isRecommended:false
  },]);
  const [query,setQuery] = useState({filter_name:"",filter_city:"",filter_specialization:"",page:currentPage});
const [selectedSpecialization,setSelectedSpecialization] = useState(null);
const [selectedCity,setSelectedCity] = useState("");
    const handleSpecializationChange = (e)=>{
      setSelectedSpecialization(e.target.value);
    }
    const handleCityChange = (e)=>{
setSelectedCity(e.target.value);
console.log(selectedCity)
    }
const handleFilterChange = (e)=>{
setQuery((prev)=>({...prev,[e.target.name]:e.target.value}));


}
const getData = ()=>{
  dispatch(asyncLoadDoctors({query}));
}
const filterDoctor=useCallback(()=>{
let context = this;
let timeout;
if(timeout){
  clearTimeout(timeout);
}
timeout = setTimeout(()=>{

  getData.apply(this);
},500);



},[query])
useEffect(()=>{
    
filterDoctor();
},[query])
    // useEffect(()=>{

    // },[specializations,city])
    useEffect(()=>{
      dispatch(asyncLoadDoctors({query}));
    
    },[]);

useEffect(()=>{

 setFilteredDocs(doctors.doctors)
},[doctors])
  return (
    <div>
<div className='flex items-center justify-around'>
    <div> <label htmlFor="selectBox" className="block text-sm font-medium text-gray-700">
       Filter By Specialization
      </label>
      <select
        id="specialization_filter"
        name="filter_specialization"
        value={query.filter_spec}
       onChange={handleFilterChange}
        className="mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      >
        <option value="" >
         All
        </option>
        {
            specializations.map((specialization)=>{
                return(
                    <option key={specialization._id} value={specialization.title}>{specialization.title}</option>
                )
            })
        }
      </select></div>
      <div className=''>
        <input type='text' name='filter_name' onChange={handleFilterChange} value={query.filter_name} className='w-full flex-1 rounded-lg py-3 px-3 w-auto outline-none' placeholder='Search Doctors By Name'/>
      </div>
      <div className="">
      <label htmlFor="selectBox" className="block text-sm font-medium text-gray-700">
        Select an option:
      </label>
      <select
        id="city_filter"
        name="filter_city"
        onChange={handleFilterChange}
        className="mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      >
        <option value="" >
          All
        </option>
        {
            cities.map((city,index)=>{
                return(
                    <option key={index} value={city}>{city}</option>
                )
            })
        }
      </select>
      </div>
</div>
<div className="text-center">
    {selectedCity!=""||selectedSpecialization!=null&&<p>{`${docs.length}  Doctors Found  ${selectedCity!=""?"in "+selectedCity:""} `}</p>}
</div>
<hr className='my-5 w-4/6 ml-auto mr-auto bg-blue-700'  />
<div className='my-5'>
    {filteredDocs.length>0&&
        filteredDocs.map((doc)=>{
return(<Doctor key={doc._id} doctor={doc}/>)
        })
    }
</div>

<div className="flex items-center justify-center mt-4">
      <nav className="relative z-0 inline-flex shadow-sm">
        { (
          <button disabled={currentPage<1}
            onClick={() => onPageChange(currentPage - 1)}
            className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            Previous
          </button>
        )}
  <button
       
        disabled
            className={`${
              
                'z-10 bg-blue-500 text-white'
                
            } relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium`}
          >
            {currentPage}
          </button>

        {  (
          <button disabled={currentPage===totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            Next
          </button>
        )}
      </nav>
    </div>
    </div>
  )
}

export default Doctors