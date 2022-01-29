import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Shoppe from "./pages/Shoppe";
import Main from "./components/layout/Main";
import Home from "./pages/Home";
import Tiki from "./pages/Tiki";
import Lazada from "./pages/Lazada";
import Sendo from "./pages/Sendo";
import Now from "./pages/Now";
import Grab from "./pages/Grab";
import Mytour from "./pages/Mytour";
import Traveloka from "./pages/Traveloka";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shoppe" element={<Shoppe />} />
          <Route path="/tiki" element={<Tiki />} />
          <Route path="/lazada" element={<Lazada />} />
          <Route path="/sendo" element={<Sendo />} />
          <Route path="/now" element={<Now />} />
          <Route path="/grab" element={<Grab />} />
          <Route path="/mytour" element={<Mytour />} />
          <Route path="/traveloka" element={<Traveloka />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
