import React from 'react';
import './Nav.css';
import {NavLink, useNavigate} from 'react-router-dom';

function Nav({isAuthenticated, toggleIsAuthenticated}) {
    const navigate = useNavigate();

    function handleClick() {
        toggleIsAuthenticated(false);
        navigate("/");
    }

    return (
        <nav>
            <div className="nav-container">
                <ul>
                    <li><NavLink
                        className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to={"/"}>Home</NavLink></li>
                    <li><NavLink
                        className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to={"/Login"}>Login</NavLink></li>
                    {isAuthenticated && <li><NavLink
                        className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to={"/Blogposts"}>Blogposts</NavLink></li>}
                    {isAuthenticated &&
                        <button
                            type="button"
                            id="uitlog-button"
                            onClick={() => handleClick()}
                        >
                            uitloggen
                        </button>}
                </ul>
            </div>
        </nav>
    );
}

export default Nav;