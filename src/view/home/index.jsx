import Contenst from "./contents";
import * as Icons from "lucide-react";
export default function Home() {
  return (
    <div>
      <div className="hero">
        <div className="tarjetas">
          <h1>ENVIOS RAPIDOS</h1>
        </div>
        <div className="tarjetas">
          <h1>COMPRAS SEGURAS</h1>
        </div>
        <div className="tarjetas">
          <h1>DEVOLUCIONES FACILES</h1>
        </div>
        <div className="tarjetas">
          <h1>ATENCION AL CLIENTE</h1>
        </div>
      </div>
      <div className="video-seccion">
        <img className="img" src="public/holas.jpeg" alt="" />
      </div>
      <Contenst />
    </div>
  );
}
