import './App.css';
import HomePage from './components/home-page/HomePage';
import { Route } from 'react-router-dom';
import Signin from './components/Sign/singnin';
import Signup from './components/Sign/signup';
import Clientes from './components/clientes/clientes';
import AdminPage from './components/adminPage/adminPage';

function App() {
  return (
    <div className="App container-fluid p-0">
      <Route path={"/abogado"} exact>
        <Clientes />
      </Route>
      <Route path={"/admin"} exact>
        <AdminPage />
      </Route>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route exact path="/ingreso" component={Signin} />
      <Route exact path="/signup" component={Signup} />
    </div>
  );
}

export default App;
