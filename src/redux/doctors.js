import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constants/global";

const doctorSlice = createSlice({name:'doctors',initialState:{doctors:[],total:0,status:"LOADING"},reducers:{
    loadDoctors:(state,action)=>{

        state.doctors=action.payload;
    },
    filterDoctors:(state,action)=>{
        state.doctors=action.payload;
        
    },
    setStatus:(state,action)=>{
        state.status=action.payload;
    }
}});

export const {loadDoctors,filterDoctors,setStatus} = doctorSlice.actions;
export const asyncLoadDoctors = (data)=>{
    return async function(dispatch){
        console.log(data)
const {query}=data;
let url = `${BASE_URL}/doctor?${query.page?'page='+query.page:""}&${query.filter_city?"city="+query.filter_city+'&':''}${query.filter_name?'name='+query.filter_name+'&':""}${query.filter_specialization?'specialization='+query.filter_specialization:""}`;
if(url.endsWith('&')){
  console.log("yes")
}
try {
    const res = await axios.get(url);
    if(res.status===200){
dispatch(loadDoctors(res.data.doctors));
    }
    else{
        dispatch(setStatus("FAILED"))
    }

    
} catch (error) {
    console.log(error);
    dispatch(setStatus("FAILED"))
}

    }
}

export default doctorSlice.reducer;