import {
  Truck,
  ShieldCheck,
  RefreshCw,
  Headphones,
  ShoppingBag,
  MessageCircle,
  Heart,
  ArrowRight,
} from "lucide-react";
import Contents from "../../components/contents";

export default function Home(props) {
  const { irACatalogo } = props;

  return (
    <main>
      <section className="portada" id="inicio">
        <div className="portada-texto">
          <p className="portada-kicker">TU ESTILO, A TU MANERA</p>
          <h1>
            Pequeños detalles.
            <br />
            <span>Gran personalidad.</span>
          </h1>
          <p className="portada-descripcion">
            Ropa, accesorios y regalos para acompañarte en cada momento. Explora
            la colección y encuentra tu próximo favorito.
          </p>
          <button className="boton-morado" type="button" onClick={irACatalogo}>
            Ver productos <ArrowRight size={17} />
          </button>
          <p className="portada-nota">Compra fácil · Atención cercana</p>
        </div>
        <div className="portada-foto">
          <img
            src="/holas.jpeg"
            alt="Selección de productos de Marca Tu Estilo Pro"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement.classList.add("foto-no-disponible");
            }}
          />
          <span className="foto-pie">MARCA TU ESTILO PRO</span>
        </div>
      </section>

      <section
        className="franja-servicios"
        aria-label="Información de la tienda"
      >
        <div>
          <ShoppingBag size={19} />
          <span>Compra a tu ritmo</span>
        </div>
        <div>
          <MessageCircle size={19} />
          <span>Atención por WhatsApp</span>
        </div>
        <div>
          <Heart size={19} />
          <span>Detalles para regalar</span>
        </div>
      </section>

      <section className="beneficios" aria-label="Beneficios de la tienda">
        <div className="tarjetas">
          <Truck size={25} />
          <span>Envíos rápidos</span>
        </div>
        <div className="tarjetas">
          <ShieldCheck size={25} />
          <span>Compras seguras</span>
        </div>
        <div className="tarjetas">
          <RefreshCw size={25} />
          <span>Devoluciones fáciles</span>
        </div>
        <div className="tarjetas">
          <Headphones size={25} />
          <span>Atención al cliente</span>
        </div>
      </section>

      <Contents {...props} />

      <section className="bloque-marca" id="nosotros">
        <img src="/hola2.png" alt="" className="marca-logo" />
        <div>
          <p className="kicker">MARCA TU ESTILO PRO</p>
          <h2>Elige lo que habla de ti.</h2>
          <p>
            Queremos que encontrar ese detalle especial sea sencillo. Explora
            nuestros productos y escríbenos si necesitas ayuda antes de hacer tu
            pedido.
          </p>
        </div>
        <button className="boton-claro" type="button" onClick={irACatalogo}>
          Explorar tienda <ArrowRight size={17} />
        </button>
      </section>
    </main>
  );
}
