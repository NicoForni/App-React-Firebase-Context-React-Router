import "./Navbar.css"
import CartWidget from "../CartWidget/Cartwidget"


const Navbar = () => {
    return(
        <nav>
            <ul className="nav-menu">
                <img className="logo" src={"./images/logo-cine.svg"} alt={""} width="" height=""></img>
                <div className="texto-de-menu">
                <li><a href="#">Peliculas</a></li>
                <li><a href="#">Series</a></li>
                <li><a href="#">Documentales</a></li>
                <li><a href="#">Novedades</a></li>                                      
                </div>
                <input className="buscadorcito" id="buscador" type="text" placeholder="Escriba un film"></input>
                <button className="botoncito" id="boton" type="submit">Buscar...</button>
                <CartWidget/>
            </ul>
        </nav>
    )
}

export default Navbar