import Contenst from "./contents";

export default function Home() {
  return (
    <div>
      <div className="hero">
        <div className="bienvenidos">
          <nav>
            <a href="">inico </a>
            <a href="">tienda </a>
            <a href="">categorias </a>
            <a href="">ofertas </a>
            <a href="">novedades </a>
            <a href="">mas vendidos </a>z<a href="">contactos </a>
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
