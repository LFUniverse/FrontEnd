import Login from "./Paginas/Login";
import Perfil from "./Paginas/Perfil";
import Home from "./Paginas/Home";

function App () {
  const Index = 3;
  return (
    <>
    {Index == 1 && <Login />}
    {Index == 2 && <Home />}
    {Index == 3 && <Perfil />}
    </>
  );
}

export default App;