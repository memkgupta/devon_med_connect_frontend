import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../constants/global';

const initialState = {user:{},status:"Loading"};

const userSlice = createSlice({name:'user',initialState:initialState,reducers:{
    loadUser:(state,action)=>{
state.user=action.payload;
    },
 setStatus:(state,action)=>{
state.status=action.payload;
 }

}});
export const {loadUser,addWindow,addAppointment,setStatus} = userSlice.actions;
export const loadUserThunk = (token)=>{
   return async function(dispatch){
      try {
         const res = await axios.get(`${BASE_URL}/user/me`,{headers:{"Authorization":`${token}`}});
         const data = res.data;
         if(res.status===200){
            dispatch(loadUser(data.user));
            dispatch(setStatus("SUCCESS"))
         }
      } catch (error) {
         dispatch(setStatus("Failed"))
      }
   }
}
export default userSlice.reducer;