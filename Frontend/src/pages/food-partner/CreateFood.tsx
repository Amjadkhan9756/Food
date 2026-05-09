import React ,{useEffect,useMemo,useRef,useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CreateFood = () =>{
    const [name,setNAme] = useState('');
    const [description,setDescription] = useState('');
    const [videoFile,setVideoFile]=useState(null);
    const [videoURL,setVideoURL]= useState('');
    const [fileError,setFileError] = useState('');
    const fileInputRef = useRef(null);


    const navigate = useNavigate();

    useEffect (()=>{
        if(!videoFile){
            setVideoURL('');
            return ;

        }
        const url =URL.createObjectURL(videoFile);
        setVideoURL(url);
        return ()=> URL.revokeObjectURL(url);

    },[videoFile]);

    const onDrop = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer?.file?.[0];
        if(!file){return ;}
        if(!file.type.startsWith('video/')) {setFileError('please dro a valid file.'); return}
        setFileError('');
        setVideoFile(file);

    }






}