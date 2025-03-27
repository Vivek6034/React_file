import { useState } from "react"
import Form from "./form"
 function App(){
  let [frmdata ,setFrmdata] = useState({
    username :"" , age:" ", contact:" ", city:" ", email:" "
  })
  function Inputvalue(e){
    const {name ,value}= e.target
    setFrmdata({...frmdata, [name]:value})
  }
  
 function finalsubmit(e){
  e.preventDefault()
  console.log(frmdata);
  
 }
  
  return(
    <>
      <h1>Name :   </h1>
      {/* <h2>Age : {frmdata}</h2>
      <h2>Contact : {frmdata}</h2>
      <h2>city : {frmdata}</h2>
      <h2>Email : {frmdata}</h2> */}
      <form action="" onSubmit={finalsubmit}>
        <label htmlFor="">Name : </label>
        <input type="text" name="username" onChange={Inputvalue} /><br /><br />

        <label htmlFor="">Age : </label>
        <input type="text" name="age" onChange={Inputvalue} /><br /><br />

        <label htmlFor="">Contact : </label>
        <input type="text" name="contact" onChange={Inputvalue} /><br /><br />

        <label htmlFor="">City : </label>
        <input type="text" name="city" onChange={Inputvalue} /><br /><br />

        <label htmlFor="">Email : </label>
        <input type="text" name="email" onChange={Inputvalue} /><br /><br />

        <input type="submit" />
      </form>
      <Form />
    </>
  )
 }
 export default App