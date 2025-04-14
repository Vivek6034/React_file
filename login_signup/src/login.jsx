import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './App.css'

function Login() {
    let navigate = useNavigate()
    let [logindata, setLogin] = useState({
        username: "", password: ""
    })
    function Loginvalue(e) {
        const { name, value } = e.target;
        setLogin({ ...logindata, [name]: value });
    };

    function Loginform(e) {
        e.preventDefault();
        let userdata = JSON.parse(localStorage.getItem("userdata"));

        if (!userdata) {
            alert("Ruko zara, sabr karo... Pehle user bano, phir duniya jeeto")
        }
        else if (
            userdata.username === logindata.username &&
            userdata.password === logindata.password
        ) {
            alert("Lo bhai, gate khul gaya")
            navigate("/home")

        }
        else {
            alert("Access denied, bhool gaye kya")
        }
    }

    return (
        <>
            <h2>Log In</h2>
            <form onSubmit={Loginform}>
                <input type="text" name='username' placeholder='username' onChange={Loginvalue} required /><br /><br />
                <input type="password" name="password" placeholder='password' onChange={Loginvalue} required /> <br /><br />

                <button type="submit">Log in</button>
            </form>
            <p>
                Don't have an account? <Link to="/signup">Signup</Link>
            </p>
        </>
    )
}

export default Login
