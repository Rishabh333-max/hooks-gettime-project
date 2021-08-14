import React,{useState} from "react";


const App=()=>{
   
    let time=new Date().toLocaleTimeString();
  
    const [ctime,setCtime]=useState(time);
    const UpdateTime=()=>{
        time=new Date().toLocaleTimeString();
        setCtime(time);
    }
return(
    <>
    <h1>{ctime}</h1>
    <button onClick={UpdateTime}>Get Current Time</button>
    </>
)
}

export default App;