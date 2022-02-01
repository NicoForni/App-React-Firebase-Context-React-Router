import "./Navbar.css"

const Navbar = () => {
    return(
      <nav>
        <ul className="nav-menu">
          <img className="logo" src="./assets/logo-pc.svg" alt="" width="" height=""></img>
          <div className="texto-de-menu">
              <li>Inicio</li>
              <li>Productos</li>
              <li>Nosotros</li>
              <li>Contacto</li>                        
          </div>
        </ul>
      </nav>
    )
}

export default Navbar