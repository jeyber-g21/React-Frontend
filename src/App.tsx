// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import HeaderPage from "./components/header";
import Slider from "./components/slider";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
// import Header from "./components/miComponente";
// import ListaPeliculas from "./components/peliculas";
import AppRoutes from "./routes/appRoutes";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <HeaderPage />
        {/* <Slider />
        <div className="center">
          <section id="content"> */}
        {/* // CARGA CADA COMPONENTE CON REACT ROUTER */}
        <main>
          <AppRoutes />
        </main>
        {/* </section>
          <Sidebar />

          <div className="clearfix"></div>
        </div> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
