import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function Signup() {
    let navigate= useNavigate()
    let [formdata, setUsername]=useState({
        username:" ",password:" "
    })
    function Forminput(e){
        const {name, value } = e.target 
        setUsername({...formdata,[name]:value})
    } 
    function Usersignup(e) {
        e.preventDefault();
        console.log(formdata);
        localStorage.setItem("userdata",JSON.stringify(formdata))
        alert("signup ho gya ")
        navigate("/login");
        
    }

  return (
    <>
        <h2>Signup</h2>
        <form onSubmit={Usersignup}>
            <input type="text" name="username" placeholder='username '  onChange={Forminput} required/><br /><br />
            <input type="password" name="password" placeholder='password' onChange={Forminput} required /><br /><br />
            
            <button type="submit">Sign Up</button>

        </form>
    </>
  )
}

export default Signup
