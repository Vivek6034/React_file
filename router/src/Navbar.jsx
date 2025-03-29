import { Link, Outlet } from "react-router-dom"
import "./app.css"

function Navbar(){
    return(
        <>
            <nav>
                <h1>Logo</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    {/* <li><Link to="/service">Service</Link></li> */}
                    <li><Link to="/contact"> Contact Us</Link></li>
                </ul>
            </nav>
            <Outlet />
            <footer>
                <h1>Footer</h1>
            </footer>
        </>
    )
}
export default Navbar