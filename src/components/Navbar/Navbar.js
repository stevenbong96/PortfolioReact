import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/project">Project</Link>
            <Link to="/homework">Homework</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Navbar