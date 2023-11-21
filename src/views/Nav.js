import './Nav.scss'
import {
    NavLink
} from "react-router-dom";

const Nav = () => {
    return (
        <div className="topnav">
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/timer">Timer Apps</NavLink>
            <NavLink to="/todo">Todo App</NavLink>
            <NavLink to="/blog">Blog App</NavLink>
            <NavLink to="/secret">Secret</NavLink>
        </div>
    )
}

export default Nav