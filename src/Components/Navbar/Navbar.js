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
                <NavLink to={"/category/peliculas"}
                    className={({isActive})=>isActive ? "active-option" : null}>
                    <li>Peliculas</li>
                </NavLink>
                <NavLink to={"/category/series"}
                    className={({isActive})=>isActive ? "active-option" : null}>
                    <li>Series</li>
                </NavLink>
                <NavLink to={"/category/documentales"}
                    className={({isActive})=>isActive ? "active-option" : null}>
                    <li>Documentales</li>
                </NavLink>
                </div>
                <input className="buscadorcito" id="buscador" type="text" placeholder="Escriba un film"></input>
                <button className="botoncito" id="boton" type="submit">Buscar...</button>
                <CartWidget/>
            </ul>
        </nav>
    )
}

export default Navbar