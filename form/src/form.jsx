import { useState } from "react"

function Form(){
   let[formdata, setForm ] =   useState({
    username:" ", city:" ", id: " ", dept:" ",salary: " "
   })
    
   function Formvalue(e){
    const {name,value} = e.target 
    setForm({...formdata , [name]:value})

   }

   function Submitform(e){
    e.preventDefault()
    console.log(formdata);
    localStorage.setItem("userdata",JSON.stringify(formdata))
}
   
    return(
        <>
        <h2>Emp Form</h2>
         <form action="" onSubmit={Submitform}>
            <label htmlFor="name">Name </label><br />
            <input type="text"  name="username " onChange={Formvalue}/><br /><br />

            <label htmlFor="City">City</label><br />
            <input type="text" name="city" onChange={Formvalue} /> <br /> <br />

            <label htmlFor="">id</label><br />
            <input type="text" name="id" onChange={Formvalue} /><br /><br />

            <label htmlFor="">Department</label><br />
            <input type="text" name="dept" onChange={Formvalue} /><br /><br />

            <label htmlFor="">Salry</label><br />
            <input type="text" name="salary" onChange={Formvalue} /><br /><br />

            <input type="submit" />
         </form>

        </>
    )
}
export default Form