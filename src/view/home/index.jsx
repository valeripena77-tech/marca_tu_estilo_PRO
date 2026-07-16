import Contenst from "./contents";

export default function Home() {
  return (
    <div>
      <div className="hero">
        <div className="bienvenidos">
          <h2> BIENVENIDOS</h2>
          <p>tienda online</p>
          <div className="barra">
            <nav>
              <a href="">inico </a>
              <a href="">servicios </a>
              <a href="">contactos </a>
            </nav>
          </div>
          <button className="btn">buscar</button>
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
