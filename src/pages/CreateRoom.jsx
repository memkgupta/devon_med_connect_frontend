import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {useSocket} from '../context/SocketProvider'
function CreateRoom() {
    const [roomId,setRoomId] = useState();
    const [email,setEmail]=useState();
    const navigate =useNavigate();    
    const socket = useSocket();
    const handleRoomJoin = useCallback((data)=>{
      const {email,room}=data;
      console.log("Data From Backend,",data);
      navigate(`/room/${room}`);
    },[navigate])
    const handleSubmit = useCallback((e)=>{
e.preventDefault();
socket.emit('room:join',{email,room:roomId});
    },[email,roomId,socket])
useEffect(()=>{
socket.on('room:join',handleRoomJoin);
return ()=>{
  socket.off('room:join',handleRoomJoin);
}
},[socket,handleRoomJoin])
  return (
  <div className='mt-12 grid grid-cols-2 gap-y-5 gap-x-12 content-center p-12'>
    <input className='p-5 outline-black border-2 border-red-500' type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} id="email" />
    <input className='p-5 outline-black border-2 border-red-500' type="text" placeholder='Enter Room Id' value={roomId} onChange={(e)=>{setRoomId(e.target.value)}} />
    <button onClick={handleSubmit}
    >Create Room</button>
  </div>
  )
}

export default CreateRoom