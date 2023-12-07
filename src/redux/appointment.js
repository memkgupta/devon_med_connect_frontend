import { createSlice } from "@reduxjs/toolkit";

const initialState = {formData:null,selectedDate:null,selectedTimeSlot:null}
const appointment = createSlice({name:'appointment',initialState:initialState,reducers:{
    setFormData:(state,action)=>{
   state.formData=action.payload;
    },
    setDate:(state,action)=>{
        state.selectedDate = action.payload.toISOString();
    },
    setTimeSlot:(state,action)=>{
        state.selectedTimeSlot=action.payload;
    }
}});
export const {setFormData,setDate,setTimeSlot} = appointment.actions;

export default appointment.reducer;