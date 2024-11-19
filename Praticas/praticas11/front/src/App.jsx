import { BrowserRouter, Routes, Router } from"react-router-dom";
import Error404 from "./Pages/Error404";
import Home from "./Pages/hOME.JSX";
import Login from "./Pages/Login";
import Perfil from "./Pages/Perfil";
import Registrar from "./Pages/Registrar";

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Router path="/Login" element={<Login />} />
        <Router path="/Registrar" element={<Registrar />} />
        <Router path="/Home" element={<Home />} />
        <Router path="/Perfil:id" element={<Perfil />} />
        <Router path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;