import Child2 from "./Child2"
function Child1(props){
    return(
        <>
            <h1>My Name is {props.value}</h1>
            <Child2 lname = {props.value} />
        </>
    )
}
 export default Child1
 