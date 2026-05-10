import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CreateFood = () => {
    const [name, setNAme] = useState('');
    const [description, setDescription] = useState('');
    const [videoFile, setVideoFile] = useState(null);
    const [videoURL, setVideoURL] = useState('');
    const [fileError, setFileError] = useState('');
    const fileInputRef = useRef(null);


    const navigate = useNavigate();

    useEffect(() => {
        if (!videoFile) {
            setVideoURL('');
            return;

        }
        const url = URL.createObjectURL(videoFile);
        setVideoURL(url);
        return () => URL.revokeObjectURL(url);

    }, [videoFile]);

    const onDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer?.file?.[0];
        if (!file) { return; }
        if (!file.type.startsWith('video/')) { setFileError('please dro a valid file.'); return }
        setFileError('');
        setVideoFile(file);

    }
    const onDragOver = (e) => {
        e.preventDefault();
    };

    const openFileDialog = () => fileInputRef.current?.click();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('name', name);
        formData.append('description', description);
        formData.append("video", videoFile);

        const response = await axios.post("http://localhost:8080.api/food", formData, { withCredentials: true });
        console.log(response.data);
        navigate("/");
    }

    const isDisable = useMemo(() => !name.trim() || videoFile, [name, videoFile]);



    return (
        <>
            <div className="create-food-page">
                <div className="create-food-card">
                    <header className="create-food-header">
                        <h1 className="create-food-title">create food</h1>
                        <p className="create-food-subtitle">Upload a short video ,give it a name ,ad a discription </p>
                    </header>
                    <form className="create-food-form" onSubmit={onSubmit}>
                        <div className="field-group">
                            <label htmlFor="foodVideo">Food video</label>
                            <input
                                id="foodVideo"
                                ref={fileInputRef}
                                className="file-input-hidden"
                                type="file"
                                accept="video/*"
                                onChange={onFileChange}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}