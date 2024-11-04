import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Perfil from "./Pages/Perfil";
import { useState } from "react";

function App () {
  const [rota, setRota] = useState("/login");
  return (
    <>
      {rota == '/login' && <Login />}
      {rota == '/home' && <Home />}
      {rota == '/perfil' && <Perfil />}
    </>
  );
}

export default App;