import React, { useCallback, useEffect, useState } from 'react'
import Timer from '../components/Timer'
import { useSocket } from '../context/SocketProvider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import peer from '../services/peer';
import ReactPlayer from 'react-player'
function Room() {
    const socket = useSocket();
    const [remoteSocketId,setRemoteSocketId] = useState(null);
    const [myStream,setMyStream] = useState(null);
    const [remoteStream,setRemoteStream]=useState(null);
  const handleOtherUserJoined = (data)=>{

const{email,id} = data;
setRemoteSocketId(id);
console.log(data);
  };
const handleIncomingCall = useCallback(async({from,offer})=>{
  const ans = await peer.getAnswer(offer)
  const stream = await navigator.mediaDevices.getUserMedia({audio:true,video:true});
  setMyStream(stream);
  setRemoteSocketId(from);
  socket.emit("call:accepted",{to:from,ans});

console.log("Incoming Call from ",from,offer)
},[socket])
  const handleCallUser = useCallback(async(socketId)=>{
const stream = await navigator.mediaDevices.getUserMedia({video:true,audio:true});
const offer = await peer.getOffer();
socket.emit("user:call",{to:socketId,offer:offer})

setMyStream(stream);
  },[remoteSocketId,socket]);

  const handleCallAccepted = useCallback(async({from,ans})=>{
peer.setLocalDescription(ans);
console.log("Call Accepted By ",from)
for(const track of myStream.getTracks()){
  peer.peer.addTrack(track,myStream)
 }
  },[socket,myStream]);
  const handleNegoNeedIncomming = useCallback(
    async ({ from, offer }) => {
      const ans = await peer.getAnswer(offer);
      socket.emit("peer:nego:done", { to: from, ans });
    },
    [socket]
  );
  const handleNegoNeedFinal = useCallback(async ({ ans }) => {
    await peer.setLocalDescription(ans);
  }, []);
const handleNegoNeeded = useCallback(async(ev)=>{
  const offer = await peer.getOffer();
  socket.emit('peer:nego:needed',{to:remoteSocketId,offer:offer})
      },[remoteSocketId, socket])
  useEffect(()=>{
    peer.peer.addEventListener('track',(ev)=>{
const rStream = ev.streams;
setRemoteStream(rStream[0]);
    });
   
  },[]);
  useEffect(() => {
    peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
    return () => {
      peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
    };
  }, [handleNegoNeeded]);

    useEffect(()=>{
      socket.on('user:joined',handleOtherUserJoined);
      socket.on('incoming:call',handleIncomingCall)
      socket.on('call:accepted',handleCallAccepted);
      socket.on("peer:nego:needed", handleNegoNeedIncomming);
      socket.on("peer:nego:final", handleNegoNeedFinal);
      return ()=>{
        socket.off('user:joined',handleOtherUserJoined);
        socket.off('incoming:call',handleIncomingCall);
        socket.off('call:accepted',handleCallAccepted);
        socket.off("peer:nego:needed", handleNegoNeedIncomming);
        socket.off("peer:nego:final", handleNegoNeedFinal);
      }
    },[socket,handleOtherUserJoined,handleIncomingCall,handleCallAccepted, handleNegoNeedIncomming,
      handleNegoNeedFinal,])
    useEffect(()=>{
if(remoteSocketId!==null){
toast("Other User Connected");

 handleCallUser(remoteSocketId)
}
    },[remoteSocketId])
    return (
<>
<ToastContainer />
<div className="">
        <Timer/>
       </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-300 relative">
       
    <div className="bg-white p-8 rounded-md shadow-md w-full ">
      {/* Video Container */}
     <div className="flex">
     <div className="relative aspect-w-16 aspect-h-9 bg-gray-600 rounded-md overflow-hidden mr-5" style={{maxWidth:'200px',maxHeight:'200px',minWidth:'200px'}}>
        {/* Replace the video source with your actual video call implementation */}
    {myStream &&  <ReactPlayer height={'200px'} width={'200px'} url={myStream} playing></ReactPlayer>}
      </div>
      <div className="grow">
        {/* Video Container 1 */}
        <div className="relative aspect-w-16 aspect-h-9 bg-gray-200 rounded-md overflow-hidden" style={{minWidth:'500px', minHeight:'500px'}}>
        {remoteStream &&  <ReactPlayer height={'500px'} width={'500px'} url={remoteStream} playing></ReactPlayer>}
        </div>

    
      </div>
     </div>
      {/* Controls */}
      <div className="flex justify-between mt-4">
        {/* Participants List */}
        <div className="flex items-center space-x-4">
          <div className="bg-blue-500 text-white p-2 rounded-full">A</div>
          <div className="bg-green-500 text-white p-2 rounded-full">B</div>
          {/* Add more participant indicators as needed */}
        </div>

        {/* End Call Button */}
        <button className="bg-red-500 text-white px-6 py-2 rounded-md">End Call</button>
      </div>

      {/* Additional Video Containers */}
      
    </div>
  </div>
</>
  )
}

export default Room