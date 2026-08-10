import Contenst from "./contents";
import { Truck, Shield, RefreshCw, Headphones } from "lucide-react";
export default function Home() {
  return (
    <div>
      <div className="hero">
        <div className="tarjetas">
          <Truck size={32} />
          <h1>ENVIOS RAPIDOS</h1>
        </div>
        <div className="tarjetas">
          <Shield size={32} />
          <h1>COMPRAS SEGURAS</h1>
        </div>
        <div className="tarjetas">
          <RefreshCw size={32} />
          <h1>DEVOLUCIONES FACILES</h1>
        </div>
        <div className="tarjetas">
          <Headphones size={32} />
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
