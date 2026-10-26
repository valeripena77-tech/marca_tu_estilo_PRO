import { Menu, X, Search, ShoppingBag } from "lucide-react";

export function Head({
  menuAbierto,
  setMenuAbierto,
  busqueda,
  setBusqueda,
  unidadesCarrito,
  abrirCarrito,
}) {
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="header">
      <a
        className="marca"
        href="#inicio"
        aria-label="Marca Tu Estilo Pro, inicio"
      >
        <img src="/hola2.png" alt="" className="marca-logo" />
        <span className="marca-nombre">
          <strong>MARCA TU ESTILO</strong>
          <small>PRO</small>
        </span>
      </a>

      <button
        className="menu-movil"
        type="button"
        aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuAbierto}
        onClick={() => setMenuAbierto((abierto) => !abierto)}
      >
        {menuAbierto ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={`nav ${menuAbierto ? "nav-abierta" : ""}`}>
        <a href="#inicio" onClick={cerrarMenu}>
          Inicio
        </a>
        <a href="#catalogo" onClick={cerrarMenu}>
          Tienda
        </a>
        <a href="#nosotros" onClick={cerrarMenu}>
          Nosotros
        </a>
        <a href="#contacto" onClick={cerrarMenu}>
          Contacto
        </a>
      </nav>

      <div className="header-acciones">
        <label className="busqueda-header">
          <Search size={17} aria-hidden="true" />
          <input
            type="search"
            placeholder="Buscar"
            aria-label="Buscar productos"
            value={busqueda}
            onChange={(e) => {
              setBusqueda(e.target.value);
              if (e.target.value) {
                document
                  .getElementById("catalogo")
                  ?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
        </label>
        <button
          className="boton-bolsa"
          type="button"
          onClick={abrirCarrito}
          aria-label={`Abrir carrito, ${unidadesCarrito} productos`}
        >
          <ShoppingBag size={20} />
          <span className="texto-bolsa">Mi bolsa</span>
          <span className="contador-bolsa">{unidadesCarrito}</span>
        </button>
      </div>
    </header>
  );
}
