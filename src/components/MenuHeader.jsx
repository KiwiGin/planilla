import { Link } from "react-router-dom";

export function MenuHeader() {
  return (
    <div className="menu-header">
      <div className="logo">
        <div className="logo-img">
          <Link to={"/inicio"}>
            <img src="src\assets\img\logo.jpg" alt="Logo" />
          </Link>
        </div>
      </div>
      <nav className="menu-nav">
        <ul className="menu-items">
          <li>
            <Link to={"/trabajadores"}>Trabajadores</Link>
          </li>
          <li>
            <Link to={"/planillas"}>Planillas</Link>
          </li>
          <li>
            <Link to={"/informes"}>Informes</Link>
          </li>
          <li>
            <Link to={"/configuraciones"}>Configuraciones</Link>
          </li>
          <li>
            <Link to={"/utilitarios"}>Utilitarios</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
