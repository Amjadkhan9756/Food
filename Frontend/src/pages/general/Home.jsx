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

    async function likeVideo(item){
        const response = await axios.post("http://localhost:8080/api/food/like",{foodId:item._id},{withCredentials:true})
         if(response.data.like){
            console.log("Video liked");
            setVideos((prev)=>prev.map((v)=>v._id===item._=== item._id? {...v,likeCount:v.likeCount+1}:v))
         }
         else{
            console.log("Video unliked");
            setVideos((prev) => prev.map((v) => v._id === item._id ? { ...v, likeCount: v.likeCount - 1 } : v))
         }
    }
    return (
        <>
       <h1>heloo</h1>
        </>
    )
}
export default Home;
