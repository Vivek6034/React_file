import Child2 from "./Child2"
function Child1(props){
    return(
        <>
            <h1>My Name is {props.name}</h1>
            <Child2 name ={props.name} />
        </>
    )
}
 export default Child1