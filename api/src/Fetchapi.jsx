import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
function Fetchapi() {
  let [apidata, setApidata] = useState([])
  let [frm, setFrm] = useState(false)
  let [editdata, setEditdata] = useState({})


  function mydelete(id) {
    axios.delete(`http://localhost:3000/userdata/${id}`)
      .then(r => alert("Data Deleted"))
  }

  function handleinput(e) {
    const { name, value } = e.target;
    setEditdata({ ...editdata, [name]: value })
  }

  function handlesubmit(e) {
    e.preventDefault();
    axios.put(`http://localhost:3000/userdata/${editdata.id}`, editdata)
      .then(r => alert("Edited "), setFrm(false))
  }

  useEffect(() => {
    axios.get('http://localhost:3000/userdata')
      .then(res =>
        setApidata(res.data)
      )
  }, [mydelete])

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
          <th>Delete</th>
          <th>Edit</th>
        </tr>
        {
          apidata.map((e) => {
            return <tr>
              <td>{e.id}</td>
              <td>{e.uname}</td>
              <td>{e.age}</td>
              <td>{e.contact}</td>
              <td>{e.city}</td>
              <td><button onClick={() => mydelete(e.id)}>Delete</button></td>
              <td><button onClick={() => { setFrm(true), setEditdata(e) }}>Update</button></td>

            </tr>
          })
        }
      </table>
      {
        frm && (
          <>
            <h1>Edit your data</h1>
            <form onSubmit={handlesubmit}>
              <label htmlFor="">id</label>
              <input type="text" name='id' value={editdata.id} onChange={handleinput} readOnly /><br /><br />

              <label htmlFor="">Name : </label>
              <input type="text" name='uname' value={editdata.uname} onChange={handleinput} required /><br /><br />

              <label htmlFor="">Age</label>
              <input type="text" name='age' value={editdata.age} onChange={handleinput} required /><br /><br />

              <label htmlFor="">Contact</label>
              <input type="text" name='contact' value={editdata.contact} onChange={handleinput} required /><br /><br />

              <label htmlFor="">City</label>
              <input type="text" name='city' value={editdata.city} onChange={handleinput} required /><br /><br />


              <input type="submit" />

            </form>
          </>
        )
      }
    </>
  )
}

export default Fetchapi
