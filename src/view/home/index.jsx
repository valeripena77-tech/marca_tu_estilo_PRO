import Contenst from "./contents";
import * as Icons from "lucide-react";
export default function Home() {
  return (
    <div>
      <div className="hero">
        <div className="buscar">
          <Icons.TextAlignJustify />
        </div>
        <div className="tarjetas">
          <nav>
            <a href="">inico </a>
          </nav>
        </div>
        <div className="tarjetas">
          <nav>
            <a href="">tienda </a>
          </nav>
        </div>
        <div className="tarjetas">
          <nav>
            <a href="">categorias </a>
          </nav>
        </div>
        <div className="tarjetas">
          <nav>
            <a href="">oferta </a>
          </nav>
        </div>
        <div className="tarjetas">
          <nav>
            <a href="">novedades </a>
          </nav>
        </div>
        <div className="tarjetas">
          <nav>
            <a href="">mas vendidos </a>
          </nav>
        </div>
        <div className="tarjetas">
          <nav>
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
