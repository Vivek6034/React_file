 import Child3 from "./Child3"
function Child2(props) {
    let {lname} =props

    return(
        <>
            <h1>last name is {lname}</h1>
            <Child3 age  = {lname} />
        </>
    )
}
export default Child2