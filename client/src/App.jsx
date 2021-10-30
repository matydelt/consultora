import "./App.css";
import HomePage from "./components/home-page/HomePage";
import { Route } from "react-router-dom";
import FormCita from "./components/FormCita/FormCita";
import Perfiles from "./components/perfiles/Perfiles";
import PerfilAbogado from "./components/perfilAbogado/PerfilAbogado";
import VistaConsultasAbogado from "./components/vistaConsultasAbogado/VistaConsultasAbogado";
import Casos from "./components/casos/casos";
import Clientes from "./components/historial/historial";
import HomeAbogado from "./components/home-Abogado/HomeAbogado";

function App() {
  return (
    <div className="App container-fluid p-0">
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/consulta">
        <FormCita />
      </Route>
      <Route path="/perfil/:eMail">
        <PerfilAbogado />
      </Route>
      <Route>
        <Perfiles path="/abogados" />
      </Route>
      <Route exact path="/home/client/abogado">
        <HomeAbogado />
      </Route>
    </div>
  );
}

export default App;
