import "./App.css";
import HomePage from "./components/home-page/HomePage";
import { Route, Switch } from "react-router-dom";
import FormCita from "./components/FormCita/FormCita";
import Perfiles from "./components/perfiles/Perfiles";
import PerfilAbogado from "./components/perfilAbogado/PerfilAbogado";
import VistaConsultasAbogado from "./components/vistaConsultasAbogado/VistaConsultasAbogado";
import Casos from "./components/casos/casos";
import Clientes from "./components/historial/historial";
import HomeAbogado from "./components/home-Abogado/HomeAbogado";
import NavAbogado from "./components/home-Abogado/NavAbogado/NavAbogado";
import Footer from "./components/home-Abogado/Footer/Footer";

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
      </Switch>
    </div>
  );
}

export default App;
