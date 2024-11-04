import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Perfil from './Pages/Perfil';
import Erro404 from './Pages/Erro404';
import Layout from './Pages/Layout';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/Perfil/:id" element={<Perfil />} />
        </Route>
        <Route path='*' element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;