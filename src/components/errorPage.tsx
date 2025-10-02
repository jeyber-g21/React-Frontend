function NotFound() {
  console.log("Error de pagina");
  return (
    <>
      <div className="center-Error">
        <section>
          <h1>404 - Página no encontrada</h1>
          <p>The page does not exist in the web</p>
          <div className="btnMov">
            <a href="/" className="btn">
              Volver al inicio
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default NotFound;
