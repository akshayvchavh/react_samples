import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/about">About Us</Link>
            </div>
        </div>
    )
}
export default Navbar;