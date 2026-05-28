import Contenst from "./contents";

export default function Home() {
  return (
    <div>
      <div className="hero">
        <h2> bienvenidos GITHUB</h2>
        <p>tienda online</p>
        <button className="btn">buscar</button>
      </div>
      <div className="video-seccion">
        <h2>video de muestra!</h2>
        <video controls>
          <source src="public/video.mp4" type="video/mp4" video></source>
        </video>
      </div>
      <Contenst />
    </div>
  );
}
