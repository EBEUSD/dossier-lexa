import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout/Layout";
import ScrollToTop from "./components/layout/ScrollToTop/ScrollToTop";
import Home from "./pages/Home/Home";
import EquiposPage from "./pages/EquiposPage/EquiposPage";
import PlayersPage from "./pages/PlayersPage/PlayersPage";
import StaffPage from "./pages/StaffPage/StaffPage";

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
        </Routes>
      </Layout>
    </>
  );
}

export default App;