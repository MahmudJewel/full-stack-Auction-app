// libraries 
import { useState, useEffect } from "react";
import axios from "axios";
import axiosInstance from "../axios";
import { useNavigate } from "react-router-dom";

// css 
import "../assets/css/login.css"

export const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            try {
                // const { data } = await
                //     axios.post('http://localhost:8000/logout/', {
                //         refresh_token: localStorage.getItem('refresh_token')
                //     }, { headers: { 'Content-Type': 'application/json' } },
                //         { withCredentials: true });
                localStorage.clear();
                axios.defaults.headers.common['Authorization'] = null;
                window.location.href = '/login'
                // navigate('/login')
            } catch (e) {
                console.log('logout not working', e)
            }
        })();
    }, []);

    return (
        <div>
            Logout
        </div>
    )
}