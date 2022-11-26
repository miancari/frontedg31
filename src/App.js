import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

//mis componentes

import CompShowUsers from './deportes/Mostrarusuarios.jsx';
import CompCreateUser from './deportes/Crearusuarios.jsx';
import CampEditUser from './deportes/EditUsuario.jsx';
import { CompCreateEvento } from './deportes/CrearEvento.jsx';
import CompMostrarevento from './deportes/MostrarEventos.jsx';
import ComEditarEvento from './deportes/EditarEvento.jsx';
import Admin from './deportes/Admin.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      
      <BrowserRouter>
                      <Routes>
                              <Route path='/' element={ <Admin />} />
                              <Route path='/users' element={ <CompShowUsers />} />
                              <Route path='/create' element={ <CompCreateUser />} />
                              <Route path='/editusuario/:id' element={ <CampEditUser />} />
                              <Route path='/regevento' element={ <CompCreateEvento />} />
                              <Route path='/meventos' element={ <CompMostrarevento />} />
                              <Route path='/editevento/:id' element={ <ComEditarEvento />} />
                      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
