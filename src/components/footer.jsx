import { MessageCircle } from "lucide-react";

export default function Footer({ numeroWhatsApp }) {
  return (
    <footer className="footer" id="contacto">
      <div className="footer-principal">
        <div className="footer-identidad">
          <a className="marca marca-footer" href="#inicio">
            <img src="/hola2.png" alt="" className="marca-logo" />
            <span className="marca-nombre">
              <strong>MARCA TU ESTILO</strong>
              <small>PRO</small>
            </span>
          </a>
          <p>Tu estilo, tus detalles, tu forma de ser.</p>
        </div>

        <div className="footer-enlaces">
          <strong>Explora</strong>
          <a href="#catalogo">Todos los productos</a>
          <a href="#nosotros">Sobre la tienda</a>
          <a href="#inicio">Volver al inicio</a>
        </div>

        <div className="footer-enlaces">
          <strong>¿Te ayudamos?</strong>
          <p>
            Escríbenos para consultar disponibilidad, envíos y detalles de tu
            pedido.
          </p>
          {numeroWhatsApp ? (
            <a
              className="enlace-contacto"
              href={`https://wa.me/${numeroWhatsApp}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={16} /> Hablar por WhatsApp
            </a>
          ) : (
            <span className="contacto-pendiente">
              Configura tu WhatsApp comercial
            </span>
          )}
        </div>
      </div>
      <div className="footer-base">
        <span>© {new Date().getFullYear()} Marca Tu Estilo Pro</span>
        <span>Gracias por visitar nuestra tienda.</span>
      </div>
    </footer>
  );
}
