import React, { useEffect, useState } from 'react';
import './App.css';
import { useNavigate } from "react-router-dom";

function Loginform() {
    let navigate = useNavigate();

    const correctUserName = "aman@gmail.com"
    const correctpassword = "aman123"
    const correctPincode = "1234"

    const [UserName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [pincode, setPincode] = useState("")
    function validate() {
        console.log(document.getElementById("text1").value, document.getElementById("text2").value)
        if (correctUserName == UserName && correctpassword == password && correctPincode == pincode) {
            navigate("/Dashboard");
        }

        else {
            alert("validation failed");
        }
    }

    return (
        <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#LOGIN">LOGIN</a></li>
            <li><a href="#register">REGISTER</a></li>

            <p id="userDetail"></p>

            <div class="center box">
                <input
                    class="field"
                    type="text"
                    placeholder="UserName"
                    id='text1'
                    value={UserName}
                    onChange={(e) => setUserName(e.target.value)}>
                </input>

                <input
                    class="field"
                    type="password"
                    placeholder="Password"
                    id='text2'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} >
                </input>

                <input
                    class="field"
                    name="pincode"
                    type="Pincode"
                    inputmode="numeric"
                    placeholder="Pincode"
                    maxlength="4"
                    id='text2'
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)} >
                </input>

                <button type="submit" onClick={() => validate()}>LOGIN </button>
                <span class="register">already have an account? <a href="#">register </a></span>
            </div>
        </ul>
    )
}
export default Loginform;


