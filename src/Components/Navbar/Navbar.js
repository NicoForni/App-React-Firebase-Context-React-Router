import React from "react";
import "./Navbar.css";
import CartWidget from "../CartWidget/Cartwidget";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return(
        <nav>
            <ul className="nav-menu">
                <NavLink to={"/"}>                    
                    <img className="logo" src={"./images/logo-cine.svg"} alt={"logo"} width="" height=""></img>
                </NavLink>
                <div className="texto-de-menu">
                <NavLink to={"/category/pelicula"} className={({isActive})=>isActive ? "active-option" : null}>
                    <li>Peliculas</li>
                </NavLink>
                <NavLink to={"/category/serie"}className={({isActive})=>isActive ? "active-option" : null}>
                    <li>Series</li>
                </NavLink>
                <NavLink to={"/category/documental"}className={({isActive})=>isActive ? "active-option" : null}>
                    <li>Documentales</li>
                </NavLink>
                </div>                
                <NavLink to="/cart">
                    <CartWidget/>
                </NavLink> 
            </ul>
        </nav>
    )
}

export default Navbar