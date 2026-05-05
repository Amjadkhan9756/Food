import React, { useState, useEffect, use } from 'react'
import { useParams } from 'react-router-dom';

import axios from 'axios';



const Profile = () => {
    const { id } = useParams()
    const [profile, setProfile] = useState(null);
    const [video, setVideos] = useState([]);

    useEffect(() => {
        axios.get(`http://localhpst:8080/api/food-partner/${id}`, { withCredentials: true })
            .then(res => {
                setProfile(res.data.foodPartner)
                setVideos(res.data.foodPartner.foodItems)
            })
    }, [id])

    return (
        <>
            <main className='profile-page'>
                <section className='profile-header'>
                    <div className='profile-meta'>
                        <img className='profile-avatar' src="https://images.unsplash.com/photo-1754653099086-3bddb9346d37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className="profile-info">
                            <h1 className="profile-pill profile-business" title="Business name">
                                {profile?.name}
                            </h1>
                            <p className="profile-pill profile-address" title="Address">
                                {profile?.address}
                            </p>
                        </div>
                    </div>

                </section>
            </main>

        </>
    )
}