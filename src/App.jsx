import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout/Layout";
import ScrollToTop from "./components/layout/ScrollToTop/ScrollToTop";
import Home from "./pages/Home/Home";
import EquiposPage from "./pages/EquiposPage/EquiposPage";
import PlayersPage from "./pages/PlayersPage/PlayersPage";
import StaffPage from "./pages/StaffPage/StaffPage";
import TeAmoPage from "./pages/TeAmoPage/TeAmoPage";

function App() {
  return (
    <>
      <ScrollToTop />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios/equipos" element={<EquiposPage />} />
          <Route path="/servicios/players" element={<PlayersPage />} />
          <Route path="/servicios/staff" element={<StaffPage />} />
          <Route path="/te-amo" element={<TeAmoPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;