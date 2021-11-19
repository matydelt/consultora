import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "@firebase/auth";
import { getMaterias, getUsuario } from "./redux/actions";
import { getAbogados } from "./redux/actions";
import HomePage from "./components/home-page/HomePage";
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
import FormCasos from "./components/FormCasos/FormCasos";
import HomeUsuario from "./components/homeUsuario/HomeUsuario";
import ConsultasUsuario from "./components/homeUsuario/consultasUsuario/ConsultasUsuario";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminPage from "./components/adminPage/adminPage";
import "./App.css";
import SiteMateria from "./components/Materia/SiteMaterias/SiteMaterias"
import NewPass from "./components/Sign/NewPass.js";
import Signup from "./components/Sign/signup";
import RegistroGoogle from "./components/Sign/RegistroGoogle";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user?.uid) {
        dispatch(getUsuario({ eMail: user.email }));
      }
    });
  });


  return (
    <div className="App container-fluid p-0">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/materias/:materia">
          <SiteMateria />
        </Route>
        <Route exact path="/consulta">
          <FormCita />
        </Route>
        <Route path="/perfil/:slug">
          <PerfilAbogado />
        </Route>
        <Route exact path="/abogados">
          <Perfiles />
        </Route>
        <Route exact path={"/admin"} component={AdminPage}></Route>

        <Route exact path="/ingreso" component={Signin} />
        <Route exact path="/registroGoogle" component={RegistroGoogle} />
        <Route exact path="/cita" component={FormCita} />
        <Route exact path="/Cambiopass" component={NewPass} />
        <Route exact path="/user/panel">
          <HomeUsuario />
        </Route>
        <Route exact path="/user/panel/consultas">
          <ConsultasUsuario />
        </Route>
        <div>
          <NavAbogado />
          <Route exact path="/user/abogado">
            <HomeAbogado />
          </Route>
          <Route exact path="/user/abogado/clientes">
            <Clientes />
          </Route>
          <Route exact path="/user/abogado/consultas">
            <VistaConsultasAbogado />
          </Route>
          <Route
            exact
            path="/user/abogado/modificar-perfil"
            component={ModificarAbogado}
          ></Route>
          <Route exact path="/user/abogado/nuevo-caso">
            <FormCasos />
          </Route>
          <Footer />
        </div>
      </Switch>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
