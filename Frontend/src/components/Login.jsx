// libraries 
import { useState, useEffect } from "react";
import axios from "axios";

// css 
import "../assets/css/login.css"

// components 
import axiosInstance from "../axios";


export const Login = () => {
    const initial_values = { uname: "", password: "" };
    const [formValues, setFormValues] = useState(initial_values);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    const handleChange = (e) => {
        // console.log(e.target);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        // console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            login(formValues.uname, formValues.password);
            // console.log('log from handle submit')
        }
    };

    // login functionality 
    const login = async (username, password) => {
        // console.log('login', username, password)
        const config = {
            headers: {
                Authorization: localStorage.getItem('access_token')
                    ? 'Bearer ' + localStorage.getItem('access_token')
                    : null,
                "Content-Type": "application/json",
            },
        };

        const body = JSON.stringify({ username, password });

        try {
            const res = await axiosInstance.post(`token/`, body, config);
            console.log("login tries", res);
            // Initialize the access & refresh token in localstorage.      
            localStorage.clear();
            localStorage.setItem('access_token', res.data.access);
            localStorage.setItem('refresh_token', res.data.refresh);
            axios.defaults.headers.common['Authorization'] =
                `Bearer ${res.data.access}`;
            window.location.href = '/'
        } catch (err) {
            console.log('Errors => ', err)
        }
    };

    useEffect(() => {
        // console.log("Errors are : ", formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (v) => {
        const errors = {};
        const regex = /^[^\s@+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!v.uname) {
            errors.uname = "Username is required!";
        }

        // if (!v.email) {
        //     errors.email = "Email is required!";
        // }

        if (!v.password) {
            errors.password = "Password is required!";
        } else if (v.password.length < 4) {
            errors.password = "Password must be more than 4 characters! ";
        } else if (v.password.length > 10) {
            errors.password = "Password must not be more than 10 characters! ";
        }
        return errors;
    };


    return (
        <div className="Auth-form-container">
            <form onSubmit={handleSubmit} className="Auth-form">
                {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div className="text-center">
                        <h1 className="text-center mt-3 text-primary">Sign in Successfull</h1>
                    </div>
                ) : (
                    <div></div>
                )} */}

                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Username</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter username"
                            name="uname"
                            value={formValues.uname}
                            onChange={handleChange}
                        />
                    </div>
                    <p className="text-danger text-center"> {formErrors.uname} </p>

                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            name="password"
                            value={formValues.password}
                            onChange={handleChange}
                        />
                    </div>
                    <p className="text-danger text-center"> {formErrors.password} </p>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
