import Navbar from "./components/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Accueil } from "./pages/Accueil";
import { Apropos } from "./pages/Apropos";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route path="/app" element={<Apropos />} />
      </Routes>
    </div>
  );
}

export default App;
