import Event from "./Event"
function App(){
   let name="vivek"
   let emp = {
    emp_name:"Aashu",
    emp_id:101,
    emp_dept : "IT",
    emp_salary : 25000
   }
   let arr =["vivek", 25 ,"bihar", "6209815873", "IT", "FSD", "Python" ]
  return(
    <>
      <h1>Welcome {name}</h1>
      <h1>your salary is {emp.emp_salary}</h1>
      <h1>your details {arr[1]}</h1>
      <Event />

    </>
  )
}
export default App