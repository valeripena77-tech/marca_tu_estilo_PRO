import { Search, Heart, Plus } from "lucide-react";
import { COP } from "../App";

export default function Contents({
  productos,
  categoria,
  setCategoria,
  busqueda,
  setBusqueda,
  favoritos,
  alternarFavorito,
  agregarAlCarrito,
}) {
  const categorias = ["Todos", "Ropa", "Accesorios", "Regalos"];

  return (
    <section className="catalogo" id="catalogo">
      <div className="titulo-seccion">
        <div>
          <p className="kicker">LA COLECCIÓN</p>
          <h2>Échale un vistazo</h2>
          <p className="subtitulo">Piezas y detalles para tu día a día.</p>
        </div>
        <span className="total-resultados">
          {productos.length} {productos.length === 1 ? "producto" : "productos"}
        </span>
      </div>

      <div className="catalogo-barra">
        <div className="categorias" aria-label="Filtrar por categoría">
          {categorias.map((item) => (
            <button
              type="button"
              key={item}
              className={categoria === item ? "categoria activa" : "categoria"}
              onClick={() => setCategoria(item)}
              aria-pressed={categoria === item}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="busqueda-catalogo">
          <Search size={17} aria-hidden="true" />
          <input
            type="search"
            placeholder="¿Qué estás buscando?"
            aria-label="Buscar en el catálogo"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </label>
      </div>

      {productos.length > 0 ? (
        <div className="productos-grid">
          {productos.map((producto) => {
            const esFavorito = favoritos.includes(producto.id);
            return (
              <article className="producto" key={producto.id}>
                <div className="producto-foto">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement.classList.add(
                        "imagen-faltante",
                      );
                    }}
                  />
                  <button
                    type="button"
                    className={`boton-favorito ${esFavorito ? "favorito-activo" : ""}`}
                    onClick={() => alternarFavorito(producto.id)}
                    aria-label={
                      esFavorito
                        ? `Quitar ${producto.nombre} de favoritos`
                        : `Añadir ${producto.nombre} a favoritos`
                    }
                    aria-pressed={esFavorito}
                  >
                    <Heart
                      size={19}
                      fill={esFavorito ? "currentColor" : "none"}
                    />
                  </button>
                </div>
                <div className="producto-detalle">
                  <span className="producto-tipo">{producto.categoria}</span>
                  <h3>{producto.nombre}</h3>
                  <p>{producto.descripcion}</p>
                  <div className="producto-pie">
                    <strong>{COP(producto.precio)}</strong>
                    <button
                      type="button"
                      className="agregar"
                      onClick={() => agregarAlCarrito(producto)}
                      aria-label={`Añadir ${producto.nombre} al carrito`}
                    >
                      <Plus size={19} />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="sin-resultados">
          <Search size={28} />
          <h3>No encontramos ese producto</h3>
          <p>Prueba con otro nombre o revisa todas las categorías.</p>
          <button
            type="button"
            className="boton-morado"
            onClick={() => {
              setBusqueda("");
              setCategoria("Todos");
            }}
          >
            Ver todo el catálogo
          </button>
        </div>
      )}
    </section>
  );
}
