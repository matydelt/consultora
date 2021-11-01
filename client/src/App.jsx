import "./App.css";
import HomePage from "./components/home-page/HomePage";
import { Route, Switch } from "react-router-dom";
import FormCita from "./components/FormCita/FormCita";
import Perfiles from "./components/perfiles/Perfiles";
import PerfilAbogado from "./components/perfilAbogado/PerfilAbogado";
import VistaConsultasAbogado from "./components/vistaConsultasAbogado/VistaConsultasAbogado";
import Clientes from "./components/clientes/clientes";
import HomeAbogado from "./components/home-Abogado/HomeAbogado";
import NavAbogado from "./components/home-Abogado/NavAbogado/NavAbogado";
import Footer from "./components/home-Abogado/Footer/Footer";
import Signin from "./components/Sign/singnin";
import Signup from "./components/Sign/signup";
import ModificarAbogado from "./components/modificarAbogado/ModificarAbogado.jsx";

function App() {
  return (
    <div className="App container-fluid p-0">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/consulta">
          <FormCita />
        </Route>
        <Route path="/perfil/:eMail">
          <PerfilAbogado />
        </Route>
        <Route exact path="/abogados">
          <Perfiles />
        </Route>
        <Route exact path="/user/abogado">
          <HomeAbogado />
        </Route>
        <Route exact path="/user/abogado/clientes">
          <NavAbogado />
          <Clientes />
          <Footer />
        </Route>
        <Route exact path="/user/abogado/consultas">
          <NavAbogado />
          <VistaConsultasAbogado />
          <Footer />
        </Route>
        <Route exact path="/ingreso" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/perfil/:eMail" component={PerfilAbogado}></Route>
        <Route exact path="/modificar-perfil" component={ModificarAbogado}></Route>
      </Switch>
    </div>
  );
}

export default App;


