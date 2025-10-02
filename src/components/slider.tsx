import Notes from "../assets/notes.jpg";

function Slider() {
  return (
    <>
      <div id="slider" className="slider-big">
        <div id="container">
          <div className="left">
            <img src={Notes} className="app-logo" alt="Logotipo" />
          </div>
          <div className="right">
            <h1>Inspírate, crea y sorprende</h1>
            <p>
              Aquí no solo encuentras artículos únicos, también un espacio para
              dar rienda suelta a tu creatividad. Transforma ideas en realidad y
              convierte objetos comunes en piezas con tu propio estilo.
            </p>
            <p>
              <strong>¿Tienes una idea en mente?</strong> No la dejes guardada.
              Empieza aquí a crear tu propio artículo y dale vida a tu
              creatividad. Cada gran proyecto comienza con un primer paso…{" "}
            </p>
            <p className="color">
              <strong>👉 ¡Este es el tuyo! 📖✅🚀</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Slider;
