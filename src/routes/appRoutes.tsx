import { Routes, Route } from "react-router-dom";
import Home from "../components/home";
import Peliculas from "../components/peliculas";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/peliculas" element={<Peliculas />} />
      {/* <Route path="/sidebar" element={<Sidebar />} /> */}
    </Routes>
  );
}
