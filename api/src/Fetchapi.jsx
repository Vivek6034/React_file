import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
function Fetchapi() {
    let[apidata,setApidata]= useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/userdata')
        .then(res=>     
            setApidata(res.data)
        )
    },[])
  return (
    <>
        <h1>Get Data from Api</h1>
        <table border={"2"}>
          <tr>
            <th>id</th>
            <th>uname</th>
            <th>age</th>
            <th>contact</th>
            <th>city</th>
          </tr>
          {
            apidata.map((e) => {return <tr>
              <td>{e.id}</td>
              <td>{e.uname}</td>
              <td>{e.age}</td>
              <td>{e.contact}</td>
              <td>{e.city}</td>
              </tr>})
          }
        </table>
    </>
  )
}

export default Fetchapi
