import "./App.css";
import HomePage from "./components/home-page/HomePage";
import { Route } from "react-router-dom";
import FormCita from "./components/FormCita/FormCita";
import Perfiles from "./components/perfiles/Perfiles";
import PerfilAbogado from "./components/perfilAbogado/PerfilAbogado";
import VistaConsultasAbogado from "./components/vistaConsultasAbogado/VistaConsultasAbogado";

function App() {
  return (
    <div className="App container-fluid p-0">
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/consulta">
        <FormCita />
      </Route>
      <Route path="/abogados/:eMail">
        <PerfilAbogado />
      </Route>
      <Route>
        <Perfiles path="/abogados" />
      </Route>
    </div>
    // <VistaConsultasAbogado />
  );
}

export default App;
