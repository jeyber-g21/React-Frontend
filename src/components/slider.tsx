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
          </div>
        </div>
      </div>
    </>
  );
}
export default Slider;
