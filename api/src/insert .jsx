import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Insert () {
    let[frmdata,setFrmdata] =useState({
        uname:"", age:"",contact:"",city:""
    })

    function Inputhandle(e) {
        const{name,value}= e.target
        setFrmdata({...frmdata,[name]:value})
    }

    let navigate=useNavigate()
    function Submithandle(e){
        e.preventDefault()
        console.log(frmdata);
        axios.post('http://localhost:3000/userdata',frmdata)
        navigate('/fetchapi')

        
    }
  return (
    <>
        <form  onSubmit={Submithandle}>
            <label htmlFor="">Name</label>
            <input type="text"  onChange={Inputhandle} name='uname'required/><br /><br />

            <label htmlFor="">Age</label>
            <input type="text"onChange={Inputhandle} name='age' required/><br /><br />

            <label htmlFor="">Contact</label>
            <input type="text" onChange={Inputhandle} name='contact' required/><br /><br />

            <label htmlFor="">City</label>
            <input type="text" onChange={Inputhandle} name='city' required/><br /><br />

            <input type="submit"/>
        </form>
    </>
  )
}

export default Insert 
