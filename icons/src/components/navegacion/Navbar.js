import React from 'react'
import {Link} from 'react-router-dom'


const navbar = () => {
  return (
    <div>
          
          
                  <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">ICONS BY RB</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">

                  <Link className="nav-link" to='/'>Inicio</Link>
                    
                  </li>
                  <li className="nav-item">

                  <Link className="nav-link" to='/productos'>Productos</Link>

                  </li>

                  <li className="nav-item">

                  <Link className="nav-link" to='/contacto'>Contacto</Link>

                  </li>

                  

                </ul>
                <span className="navbar-text">
                  Since 1995
                </span>
              </div>
            </div>
          </nav>


    </div>
  )
}

export default navbar