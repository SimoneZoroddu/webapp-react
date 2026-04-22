import { NavLink } from 'react-router-dom'

export default function AppHeader() {


    return (

        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to='/' className="navbar-brand">
                    <i className="bi bi-camera-reels-fill px-3"></i>
                    <span>My Films</span>
                </NavLink>
            </div>
        </nav>
    )
}