import React, { useState } from 'react';
import axios from 'axios';

function myalert() {
    alert("Thankyou for your feedback!");
}

function LoginForm() {

    const [formValue, setFormValue] = useState({
        email: '',
        message: '',
        fname: ''
    });

    const handleSubmit = async (event) => {
        // store the states in the form data
        event.preventDefault();
        const loginFormData = new FormData();
        loginFormData.append("name", formValue.fname);
        loginFormData.append("email", formValue.email);
        loginFormData.append("message", formValue.message);

        try {
            // make axios post request
            const response = await axios({
                method: "post",
                url: "/api/login",
                data: loginFormData,
                headers: { "Content-Type": "multipart/form-data" },
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: [event.target.value]
        });
    };

    return (
        <div className="input-div">

            <div class="login-box">
                <h2>Hit us up!</h2>
                <form>
                    <div class="user-box">
                        <input type="name" name="name" required="" />
                        <label>Name</label>
                    </div>
                    <div class="user-box">
                        <input type="email" name="email" required="" />
                        <label>Email</label>
                    </div>
                    <div class="user-box">
                        <input type="text" name="message" required="" />
                        <label>Message</label>
                    </div>
                    <a href="" onclick="myalert()">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;

