// libraries 
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

// css 
import "../assets/css/signup.css"

// components 
import axiosInstance from "../axios"

export const Signup = () => {
    const navigate = useNavigate();
    const initial_values = { fname: "", lname: "", email: "", uname: "", password: "" };
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
            signup(formValues.uname, formValues.password, formValues.email, formValues.fname, formValues.lname);
            console.log('log from handle submit')
        }
    };

    useEffect(() => {
        console.log("Errors are : ", formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // console.log(formValues);
        }
    }, [formErrors]);


    // signup functionality 
    const signup = async (username, password, email, first_name, last_name) => {
        console.log('signup', username, password)
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const body = JSON.stringify({ first_name, last_name, email, username, password });
        console.log('Body==> ', body)

        try {
            const res = await axiosInstance.post(`auth/user/`, body, config);
            console.log("signin tries");
            navigate('/login');
        } catch (err) {
            console.log('Errors => ', err)
        }
    };

    const validate = (v) => {
        const errors = {};
        const regex = /^[^\s@+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!v.uname) {
            errors.uname = "Username is required!";
        }

        if (!v.email) {
            errors.email = "Email is required!";
        }

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
        <div className="signup-form-container">
            <form onSubmit={handleSubmit} className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>First Name</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="First name"
                            name="fname"
                            value={formValues.fname}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label>Last Name</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Last name"
                            name="lname"
                            value={formValues.lname}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </div>
                    <p className="text-danger text-center"> {formErrors.email} </p>

                    <div className="form-group mt-3">
                        <label>Username</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Username"
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
                            placeholder="Password"
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
                    {/* <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p> */}
                </div>
            </form>
        </div>
    )
}

