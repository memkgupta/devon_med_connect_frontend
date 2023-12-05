import React, { useState } from 'react'
import { TiDelete } from 'react-icons/ti';

function DoctorRegistration() {
    const [lic,setLic] = useState(null);
    const [lic_uri,setLicUri] = useState(null);
    const [fileUri,setFileUri] = useState(["","",""]);
    const [formData,setFormData] = useState({
        name:"",
        phone:"",
        email:"",
        license:"",
        specialization:"",
        streetAddress:"",
        pincode:"",
        city:"",
        state:"",
        files:[{},{},{}],
        qualifications:[],
        appointmentTimeSlots:[],
        onlineMeetTimeSlots:[],
    });
    const handleLicSelect = (e)=>{
       console.log(e)
        const file = e.target.files[0];
        
        if(file){
            const reader = new FileReader();
            reader.onload = (e)=>{
                setLic(file);
                console.log(file)
                setLicUri(reader.result);
            }
            reader.readAsDataURL(file)
        }
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(formData);
    }
    const handleChange = (e)=>{
        const {name,value,files} = e.target;

        setFormData((prev)=>({...prev,[name]:value}));
    }
    const handleAddQualifications = (e,index)=>{
        let arr = formData.qualifications;
        arr.push({title:"",certificateNo:"",issueDate:""});
        setFormData(prev=>({...prev,qualifications:arr}))
    }
    const handleChangeQualifications = (e,index)=>{
        const {name,value} = e.target;
       const newArr = formData.qualifications.map((element,i)=>(i===index?{...element,[name]:value}:element));
       setFormData(prev=>({...prev,qualifications:newArr}));
    }
    const handleAddImage = ()=>{
const arr = formData.files;
arr.push({});
setFileUri([...fileUri,""]);
setFormData((pre)=>({...pre,files:arr}));
    }
    const removeImage = (e,index)=>{
        const newArr = formData.files.filter((_i,id)=>{
            return(id!==index)
        });
        setFormData((prev)=>({...prev,files:newArr}));
    }
    const handleSelectImage = (e,index)=>{
let arr = formData.files;
arr[index]=e.target.files[0];
        setFormData((prev)=>({...prev,files:arr}));
const reader = new FileReader();
reader.onload = (e)=>{
    // let arr = fileUri;
    // arr[index]=reader.result;
    setFileUri((prev)=>{return prev.map((element,i)=>(i===index?reader.result:element))});
   
}
reader.readAsDataURL(e.target.files[0]);
    }
      return (
    <div>
        Register As a doctor with us
        <div className="shadow-md rounded-md p-5">
<form>
<div className="rounded-md shadow-sm grid md:grid-cols-3 grid-cols-2 gap-5">
    <div>
        <label htmlFor="name" >Name</label>
        <input onChange={handleChange} type="text" name="name" id="name" className='mt-5 w-full rounded-md p-3 outline outline-2 border-none outline-offset-2 outline-pink-500' />
    </div>
    {/* email */}
    <div>
        <label htmlFor="email" >Email</label>
        <input onChange={handleChange} type="text" name="email" id="email" className='mt-5 w-full rounded-md p-3 outline outline-2 border-none outline-offset-2 outline-pink-500' />
    </div>
    {/* phone */}
    <div>
        <label htmlFor="phone" >Phone</label>
        <input onChange={handleChange} type="tel" name="phone" id="phone" className='mt-5 w-full rounded-md p-3 outline outline-2 border-none outline-offset-2 outline-pink-500' />
    </div>
    {/* licesnse */}
    <div className='grid gap-2 place-content-center'>
        <label htmlFor="lic_img" className='text-center'>{lic?"Image Selected":"Please Select An image of license"}</label>
        <input  type="file" accept='.jpg, .jpeg, .png' name="lic_img" id="lic_img" hidden onChange={(e)=>{handleLicSelect(e)}}/>
        <br></br>
        <div className="w-12 h-12">
            <img src={lic_uri} alt="" id='lic_prev' />
        </div>
        <span onClick={(e)=>{document.getElementById('lic_img').click()}} className={`cursor-pointer w-24 p-3 rounded-sm bg-purple-500 `}>{lic?"Change":"Select"}</span>
       
    </div>
    {/* specialization */}
    <div>
        <input onChange={handleChange} type="text" placeholder='Enter Your Specialization' name="specialization" id="specialization" className='mt-5 w-full rounded-md p-3 outline outline-2 border-none outline-offset-2 outline-pink-500' />
    </div>
    {/* City */}
    <div>
        <input onChange={handleChange} type="text" name="city" id="city" placeholder='Enter your City' className='mt-5 w-full rounded-md p-3 outline outline-2 border-none outline-offset-2 outline-pink-500' />
    </div>
    {/* Street Address */}
    <div>
        <input onChange={handleChange} type="text" name="streetAddress" placeholder='Enter Your Street Address' id="streetAddress" className='mt-5 w-full rounded-md p-3 outline outline-2 border-none outline-offset-2 outline-pink-500' />
    </div>
    {/* pincode */}
    <div>
        <input onChange={handleChange} type="text" name="pincode" placeholder='Enter Your Pincode' id="pincode" className='mt-5 w-full rounded-md p-3 outline outline-2 border-none outline-offset-2 outline-pink-500' />
    </div>
    {/* state */}
    <div>
        <input onChange={handleChange} type="text" name="state" id="state" placeholder='Enter Your state' className='mt-5 w-full rounded-md p-3 outline outline-2 border-none outline-offset-2 outline-pink-500' />
    </div>
    {/* images */}
    <div className="grid gap-y-2">
    <label htmlFor='images'>Please Select  images</label>
    <div id='images'>
        {formData.files.map((file,index)=>{
            return(
                <div key={index} className="grid grid-cols-3 gap-x-4 my-2">
                    {file!={}&&<div>
                        <img className='w-24 h-24' src={fileUri[index]} alt="g" />
                        </div>}
                        <input type="file" accept='.jpg, .jpeg, .png' name="img" id={`img-${index}`} hidden onChange={(e)=>{handleSelectImage(e,index)}}/>
                    <span className={`cursor-pointer w-24 h-12 p-3 rounded-sm bg-purple-500 `} onClick={(e)=>{document.getElementById(`img-${index}`).click()}}>{fileUri[index]?"Change":"Select"}</span>    
                    <span className={`cursor-pointer w-24 h-12 p-3 rounded-sm bg-purple-500 ${index<4?'hidden':''}`} onClick={(e)=>{removeImage(e,index)}}><TiDelete/></span>
                </div>
            )
        })}
    </div>
    </div>
{/* qualifications */}
<div className="grid gap-y-4">
    <label>Please Add The Qualifications</label>
    {formData.qualifications.map((qualification,index)=>{
        return(
            <div className='grid grid-cols-3 gap-x-4' key={index}>
                   <input onChange={(e)=>{handleChangeQualifications()}}type="text" name="title" placeholder='Enter The Title' id={`title-${index}`} className='mt-5 w-full rounded-md p-3 outline outline-2 border-none outline-offset-2 outline-pink-500 h-12 mx-5' />
                   <input onChange={(e)=>{handleChangeQualifications()}}type='text' name='certificateNo' placeholder='Enter The No.' id={`certificateNo-${index}`} className='mt-5 w-full rounded-md p-3 outline outline-2 border-none outline-offset-2 outline-pink-500 h-12 mx-5'></input>
                   <input onChange={(e)=>{handleChangeQualifications()}}type='date' name='issueDate' placeholder='Enter The IssueDate' id={`issue-date-${index}`} className='mt-5 w-full rounded-md p-3 outline outline-2 border-none outline-offset-2 outline-pink-500 h-12 mx-5'></input>
                </div>
        )
    })}
    <span onClick={handleAddQualifications} className={`cursor-pointer h-12 p-3 rounded-sm bg-purple-500 `}>Add Qualification</span>
</div>
</div>
<button type="submit" className='bg-purple-500 text-white rounded-md p-3' onClick={(e)=>{handleSubmit(e)}}>Submit</button>
</form>
        </div>
    </div>
  )
}

export default DoctorRegistration