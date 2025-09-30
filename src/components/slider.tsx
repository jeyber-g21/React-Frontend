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
            <h1>
              Bienvenido al Curso de React con Víctor Robles de
              victorroblesweb.es
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default Slider;
