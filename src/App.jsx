import { useMemo, useState } from "react";
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import "./App.css";
import { Head } from "./components/head";
import Home from "./view/home";
import Footer from "./components/footer";

const PRODUCTOS_INICIALES = [
  {
    id: 1,
    nombre: "Saco de vicuña",
    categoria: "Ropa",
    precio: 169900,
    imagen: "/saco.jpeg",
    descripcion: "Una prenda versátil para completar tu look.",
  },
  {
    id: 2,
    nombre: "Termo cilíndrico",
    categoria: "Accesorios",
    precio: 119900,
    imagen: "/termo.jfif",
    descripcion: "Práctico para acompañarte durante el día.",
  },
  {
    id: 3,
    nombre: "Peluches",
    categoria: "Regalos",
    precio: 79900,
    imagen: "/peluches.jfif",
    descripcion: "Un detalle especial para regalar.",
  },
  {
    id: 4,
    nombre: "Billetera moderna",
    categoria: "Accesorios",
    precio: 59900,
    imagen: "/billeteras.jfif",
    descripcion: "Diseño funcional para llevar lo esencial.",
  },
];

export const COP = (valor) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(valor);

const NUMERO_WHATSAPP = "573112679540";

export default function App() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const [favoritos, setFavoritos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const [aviso, setAviso] = useState("");

  const productosFiltrados = useMemo(() => {
    const termino = busqueda.trim().toLocaleLowerCase("es");
    return PRODUCTOS_INICIALES.filter((producto) => {
      const coincideTexto =
        producto.nombre.toLocaleLowerCase("es").includes(termino) ||
        producto.descripcion.toLocaleLowerCase("es").includes(termino);
      const coincideCategoria =
        categoria === "Todos" || producto.categoria === categoria;
      return coincideTexto && coincideCategoria;
    });
  }, [busqueda, categoria]);

  const unidadesCarrito = carrito.reduce(
    (total, item) => total + item.cantidad,
    0,
  );
  const totalCarrito = carrito.reduce(
    (total, item) => total + item.precio * item.cantidad,
    0,
  );

  const mostrarAviso = (mensaje) => {
    setAviso(mensaje);
    window.setTimeout(() => setAviso(""), 2600);
  };

  const agregarAlCarrito = (producto) => {
    setCarrito((actual) => {
      const existe = actual.some((item) => item.id === producto.id);
      return existe
        ? actual.map((item) =>
            item.id === producto.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item,
          )
        : [...actual, { ...producto, cantidad: 1 }];
    });
    mostrarAviso(`${producto.nombre} se añadió al carrito.`);
  };

  const cambiarCantidad = (id, cambio) => {
    setCarrito((actual) =>
      actual
        .map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad + cambio } : item,
        )
        .filter((item) => item.cantidad > 0),
    );
  };

  const alternarFavorito = (id) => {
    setFavoritos((actual) =>
      actual.includes(id)
        ? actual.filter((favorito) => favorito !== id)
        : [...actual, id],
    );
  };

  const irACatalogo = () => {
    setMenuAbierto(false);
    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
  };

  const finalizarCompra = () => {
    if (!carrito.length) return;
    if (!NUMERO_WHATSAPP) {
      mostrarAviso("Configura el número de WhatsApp comercial en src/App.jsx.");
      return;
    }

    const detalle = carrito
      .map(
        (item) =>
          `- ${item.nombre} x ${item.cantidad}: ${COP(item.precio * item.cantidad)}`,
      )
      .join("\n");
    const mensaje = `Hola, quiero hacer un pedido en MARCA TU ESTILO PRO:\n\n${detalle}\n\nTotal de productos: ${COP(totalCarrito)}\n\n¿Me ayudan a coordinar la compra y el envío?`;

    window.open(
      `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="tienda">
      <Head
        menuAbierto={menuAbierto}
        setMenuAbierto={setMenuAbierto}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        unidadesCarrito={unidadesCarrito}
        abrirCarrito={() => setCarritoAbierto(true)}
      />

      <Home
        productos={productosFiltrados}
        categoria={categoria}
        setCategoria={setCategoria}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        favoritos={favoritos}
        alternarFavorito={alternarFavorito}
        agregarAlCarrito={agregarAlCarrito}
        irACatalogo={irACatalogo}
      />

      <Footer numeroWhatsApp={NUMERO_WHATSAPP} />

      {aviso && (
        <div className="aviso-toast" role="status">
          <span>{aviso}</span>
          <button
            type="button"
            onClick={() => setAviso("")}
            aria-label="Cerrar aviso"
          >
            <X size={17} />
          </button>
        </div>
      )}

      {carritoAbierto && (
        <div
          className="capa-carrito"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setCarritoAbierto(false);
          }}
        >
          <aside
            className="panel-carrito"
            role="dialog"
            aria-modal="true"
            aria-label="Mi bolsa"
          >
            <div className="carrito-titulo">
              <div>
                <p className="kicker">TU SELECCIÓN</p>
                <h2>
                  Mi bolsa <span>({unidadesCarrito})</span>
                </h2>
              </div>
              <button
                type="button"
                className="cerrar-carrito"
                onClick={() => setCarritoAbierto(false)}
                aria-label="Cerrar carrito"
              >
                <X size={22} />
              </button>
            </div>

            {carrito.length === 0 ? (
              <div className="bolsa-vacia">
                <ShoppingBag size={43} />
                <h3>Tu bolsa está vacía</h3>
                <p>Cuando encuentres algo que te guste, aquí lo tendrás.</p>
                <button
                  type="button"
                  className="boton-morado"
                  onClick={() => {
                    setCarritoAbierto(false);
                    irACatalogo();
                  }}
                >
                  Ver productos
                </button>
              </div>
            ) : (
              <>
                <div className="carrito-lista">
                  {carrito.map((item) => (
                    <article className="item-carrito" key={item.id}>
                      <img src={item.imagen} alt={item.nombre} />
                      <div className="item-carrito-info">
                        <h3>{item.nombre}</h3>
                        <strong>{COP(item.precio)}</strong>
                        <div className="control-cantidad">
                          <button
                            type="button"
                            onClick={() => cambiarCantidad(item.id, -1)}
                            aria-label={`Disminuir ${item.nombre}`}
                          >
                            <Minus size={14} />
                          </button>
                          <span>{item.cantidad}</span>
                          <button
                            type="button"
                            onClick={() => cambiarCantidad(item.id, 1)}
                            aria-label={`Aumentar ${item.nombre}`}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="quitar-item"
                        onClick={() =>
                          setCarrito((actual) =>
                            actual.filter(
                              (producto) => producto.id !== item.id,
                            ),
                          )
                        }
                        aria-label={`Eliminar ${item.nombre}`}
                      >
                        <Trash2 size={17} />
                      </button>
                    </article>
                  ))}
                </div>

                <div className="carrito-resumen">
                  <div className="linea-total">
                    <span>Subtotal</span>
                    <strong>{COP(totalCarrito)}</strong>
                  </div>
                  <p>El valor del envío se coordina por separado.</p>
                  <div className="linea-total total-final">
                    <span>Total de productos</span>
                    <strong>{COP(totalCarrito)}</strong>
                  </div>
                  <button
                    type="button"
                    className="boton-morado boton-finalizar"
                    onClick={finalizarCompra}
                  >
                    Continuar por WhatsApp <ArrowRight size={17} />
                  </button>
                  <button
                    type="button"
                    className="seguir"
                    onClick={() => setCarritoAbierto(false)}
                  >
                    Seguir mirando
                  </button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}
