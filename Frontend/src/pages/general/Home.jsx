import React,{useEffect,useState} from "react";
import axios from 'axios';



const Home = ()=>{
    const [videos,setVideos]=useState([]);
    
    useEffect(()=>{
        axios.get("http://localhost:8080/api/food",{withCredentials:true})
         .then(res=>{
            console.log(res.data)
            setVideos(res.data.foodItems)
         })
         .catch(()=>{

         })
    },[])
    return (
        <>
       <h1>heloo</h1>
        </>
    )
}
export default Home;
