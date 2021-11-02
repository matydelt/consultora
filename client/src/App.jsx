import "./App.css";
import HomePage from "./components/home-page/HomePage";
import { Route, Switch } from "react-router-dom";
import FormCita from "./components/FormCita/FormCita";
import Perfiles from "./components/perfiles/Perfiles";
import PerfilAbogado from "./components/perfilAbogado/PerfilAbogado";
import ModificarAbogado from "./components/modificarAbogado/ModificarAbogado";
import VistaConsultasAbogado from "./components/vistaConsultasAbogado/VistaConsultasAbogado";
import Clientes from "./components/clientes/clientes";
import HomeAbogado from "./components/home-Abogado/HomeAbogado";
import NavAbogado from "./components/home-Abogado/NavAbogado/NavAbogado";
import Footer from "./components/home-Abogado/Footer/Footer";
import Signin from "./components/Sign/singnin";
import Signup from "./components/Sign/signup";
import FormCasos from "./components/FormCasos/FormCasos";
// import { modificarAbogado } from "../../api/src/controllers/put";
// import ModificarAbogado from "./components/modificarAbogado/ModificarAbogado";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AdminPage from "./components/adminPage/adminPage";

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
        <Route exact path={"/admin"} component={AdminPage}></Route>
        <Route exact path="/user/abogado/nuevo-caso">
          <FormCasos />
        </Route>
        <Route exact path="/ingreso" component={Signin} />
        <Route exact path="/cita" component={FormCita} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/perfil/:eMail" component={PerfilAbogado}></Route>
        <Route exact path="/modificar-perfil" component={ModificarAbogado}></Route>
      </Switch>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;


