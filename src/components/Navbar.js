import { NavLink, withRouter } from "react-router-dom";
import auth from "../auth";

const Navbar = (props) => {
    const authHandler = () => {
        if(auth.isAuthenticated()){
            auth.logout(()=>{
                props.history.push('/')
            })
        }else{
            auth.login(()=>{
                props.history.push('/about')
            })
        }
    }
    const authText = auth.isAuthenticated() ? 'logout' : 'login'
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav nav-tabs mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>
                <button className="btn btn-success navbar-btn" onClick={authHandler} >{authText} </button>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)
