import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../src/Pages/Home';
import Perfil from './Pages/Perfil';
import Login from '../src/Pages/Login';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Perfil/1" element={<Perfil/>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<Erro/>} />
        <Route path='/' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;