const Event = () =>{
    function fun() {
        alert("working")
    }
    return(
        <>
            <button onClick={fun}>Click</button>
            <button onDoubleClick={fun}>Click</button>
            <button onMouseDownCapture={fun}>Click</button>
            <button onMouseOver={fun}>Click</button>
            <button onMouseOut={fun}>Click</button>
        </>
    )
}
export default Event