import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import HeaderPage from "./components/header";
import Slider from "./components/slider";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import Header from "./components/miComponente";
import ListaPeliculas from "./components/peliculas";
import AppRoutes from "./routes/appRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <HeaderPage />
        <Slider />
        <div className="center">
          <section id="content">
            {/* // CARGA CADA COMPONENTE CON REACT ROUTER */}
            <main>
              <AppRoutes />
            </main>

            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <h1>Vite + React</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.tsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
            <div>
              <Header />
              <ListaPeliculas />
            </div>
          </section>
          <Sidebar />

          <div className="clearfix"></div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
