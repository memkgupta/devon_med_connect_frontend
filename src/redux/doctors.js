import { createSlice } from "@reduxjs/toolkit";

const doctorSlice = createSlice({name:'doctors',initialState:{doctors:[],total:0},reducers:{
    loadDoctors:(state,action)=>{

        state.doctors=action.payload;
    },
    filterDoctors:(state,action)=>{
        state.doctors=action.payload;
        
    }
    
}});

export const {loadDoctors,filterDoctors} = doctorSlice.actions;
export const asyncLoadDoctors = (data)=>{
    return async function(dispatch){
// const {query}=data;
// const url = `${BASE_URL}`
dispatch(loadDoctors(data));
    }
}

export default doctorSlice.reducer;