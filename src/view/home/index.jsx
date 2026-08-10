import Contenst from "./contents";
import * as Icons from "lucide-react";
export default function Home() {
  return (
    <div>
      <div className="hero">
        <div className="tarjetas">
          <nav className="nav">
            <a href="">ENVIOS RAPIDOS </a>
          </nav>
        </div>
        <div className="tarjetas">
          <nav className="nav">
            <a href="">tienda </a>
          </nav>
        </div>
        <div className="tarjetas">
          <nav className="nav">
            <a href="">categorias </a>
          </nav>
        </div>
        <div className="tarjetas">
          <nav className="nav">
            <a href="">oferta </a>
          </nav>
        </div>
        <div className="tarjetas">
          <nav className="nav">
            <a href="">novedades </a>
          </nav>
        </div>
        <div className="tarjetas">
          <nav className="nav">
            <a href="">mas vendidos </a>
          </nav>
        </div>
        <div className="tarjetas">
          <nav className="nav">
            <a href="">contactos </a>
          </nav>
        </div>
      </div>
      <div className="video-seccion">
        <img className="img" src="public/holas.jpeg" alt="" />
      </div>
      <Contenst />
    </div>
  );
}
