import Contenst from "./contents";

export default function Home() {
  return (
    <div>
      <div className="hero">
        <div className="tarjeta">
          <nav>
            <a href="">inico </a>
          </nav>
        </div>
        <div className="tarjeta">
          <nav>
            <a href="">tienda </a>
          </nav>
        </div>
        <div className="tarjeta">
          <nav>
            <a href="">categorias </a>
          </nav>
        </div>
        <div className="tarjeta">
          <nav>
            <a href="">oferta </a>
          </nav>
        </div>
        <div className="tarjeta">
          <nav>
            <a href="">novedades </a>
          </nav>
        </div>
        <div className="tarjeta">
          <nav>
            <a href="">mas vendidos </a>
          </nav>
        </div>
        <div className="tarjeta">
          <nav>
            <a href="">contactos </a>
          </nav>
        </div>
      </div>
      <div className="video-seccion">
        <video controls>
          <source src="public/video.mp4" type="video/mp4" video></source>
        </video>
      </div>
      <Contenst />
    </div>
  );
}
