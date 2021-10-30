import './App.css';
import HomePage from './components/home-page/HomePage';
import { Route, Switch } from 'react-router-dom';
import PerfilAbogado from './components/perfilAbogado/PerfilAbogado';
import Perfiles from './components/perfiles/Perfiles';
import ModificarAbogado from './components/modificarAbogado/ModificarAbogado';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App container-fluid p-0">

      <ToastContainer></ToastContainer>

      <Switch>

        <Route exact path="/profesionales" >
          <Perfiles />
        </Route>
        <Route exact path="/perfil/:eMail" component={PerfilAbogado}></Route>
        <Route exact path="/modificar-perfil" component={ModificarAbogado}></Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
