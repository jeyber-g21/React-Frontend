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
            <h1>Get inspired, create and surprise</h1>
            <p>
              Here you'll find not only unique items, but also a space to
              unleash your creativity. Transform ideas into reality and turn
              ordinary objects into pieces with your own style.
            </p>
            <p>
              <strong>Do you have an idea in mind?</strong> Don't let it go.
              Start here to create your own item and bring your creativity to
              life. Every great project begins with a first step...{" "}
            </p>
            <p className="color">
              <strong>👉 This one's for you! 📖✅🚀</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Slider;
