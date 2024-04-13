import React,{useEffect, useState} from 'react'
import { navigate, useNavigate } from 'react-router-dom' 
import "./App.css"
import img from "./amuze logo.png"
//import "./content.json"
function Preloader() {
 
const [data, setData]= useState([])
const [done, setDone]= useState(undefined)
const navigate = useNavigate();
 

useEffect(() => {
  setTimeout(() => {
    
navigate("/dashboard") }, 3000);

},[])


return(
  <div className="App-header">
      <>
        {!done ? (
          <img
            src={img}
            alt='Loading'
            height={250}
            width={275}
            style={{ animation: 'App-logo-spin 2s linear infinite' }} // Apply the animation inline
          /> 
   ) :(
<ul>
 {data.map((post) => (
  <li key={post.id}>{post.title}</li>))}
</ul>       
  
 )}
  </>
  </div>
);
}

export default Preloader;

