import './App.css';
import { Route, Switch } from 'react-router';
import PerfilAbogado from './components/perfilAbogado/PerfilAbogado';
import Perfiles from './components/perfiles/Perfiles';

function App() {
  return (<>
  
    <Switch>
      <Route path="/perfil/:nombreAbogado" component={PerfilAbogado}></Route>
      <Route path="/profesionales" component={Perfiles}></Route>
    </Switch>
  </>);
}

export default App;
