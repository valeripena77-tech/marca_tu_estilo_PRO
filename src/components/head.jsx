import * as Icons from "lucide-react";
export function Head() {
  return (
    <header className="header">
      <div className="conten-logo">
        <img
          className="img-logo"
          src="Blue_Teddy_Bear_Sticker-removebg-preview.png"
          alt=""
        />
        <h1 className="logo"> marca tu estilo pro</h1>
      </div>
      <div className="buscar">
        <Icons.Search />
        <input type="text" placeholder="Buscar..." />
      </div>
    </header>
  );
}
