import './App.css';
import HomePage from './components/home-page/HomePage';
import { Route } from 'react-router-dom';
import HomeAbogado from './components/homeAbogado/homeAbogado';

function App() {
  return (
    <div className="App container-fluid p-0">
      {/* <Route path="/ingreso">
        <SignIn></SignIn>
      </Route> */}
      <Route path={"/abogado"} exact>
        <HomeAbogado />
      </Route>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </div>
  );
}

export default App;
