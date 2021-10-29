import './App.css';
import HomePage from './components/home-page/HomePage';
import { Route, Switch } from 'react-router-dom';
import PerfilAbogado from './components/perfilAbogado/PerfilAbogado';
import Perfiles from './components/perfiles/Perfiles';

function App() {
  return (
    <div className="App container-fluid p-0">
      
      <Switch>

      <Route  exact path="/profesionales" >
        <Perfiles />
      </Route>
      <Route exact path="/perfil/:eMail" component={PerfilAbogado}></Route>
      <Route path="/">
        <HomePage />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
