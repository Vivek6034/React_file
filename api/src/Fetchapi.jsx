import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
function Fetchapi() {
    let[apidata,setApidata]=useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/userdata')
        .then(res=>     
            setApidata(res.data)
        )
    },[])
  return (
    <>
        <h1>Get Data from Api</h1>
    </>
  )
}

export default Fetchapi
