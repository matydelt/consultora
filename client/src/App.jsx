import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "@firebase/auth";
import { getMaterias, getProvincias, getUsuario, getAbogados } from "./redux/actions";
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
import Signup from "./components/Sign/signup";
import FormCasos from "./components/FormCasos/FormCasos";
import HomeUsuario from "./components/homeUsuario/HomeUsuario";
import ConsultasUsuario from "./components/homeUsuario/consultasUsuario/ConsultasUsuario";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminPage from "./components/admin/adminPage/adminPage";
import TurnosAbogado from "./components/home-Abogado/turnos/TurnosAbogado";

import "./App.css";
import TurnosUsuario from "./components/homeUsuario/turnosUsuario/TurnosUsuario";

import SiteMateria from "./components/Materia/SiteMaterias/SiteMaterias"
function App() {
  const dispatch = useDispatch();
  const { usuario } = useSelector(state => state)

  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user?.uid) {
        dispatch(getUsuario({ eMail: user.email }));
      }
    });
  }, [dispatch]);


  useEffect(() => {
    dispatch(getProvincias());
    dispatch(getAbogados());
    dispatch(getMaterias());
  }, []);

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
        <Route path="/admin" render={(props) => <AdminPage props={props} adminId={usuario.adminId} />} />
        <Route exact path="/ingreso" component={Signin} />
        <Route exact path="/cita" component={FormCita} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/user/panel">
          <HomeUsuario />
        </Route>
        <Route exact path="/user/panel/consultas">
          <ConsultasUsuario />
        </Route>
        <Route exact path="/user/panel/turnos">
          <TurnosUsuario />
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
          <Route path="/user/abogado/gestionar-turnos">
            <TurnosAbogado></TurnosAbogado>
          </Route>
          <Route exact path="/user/abogado/nuevo-caso">
            <FormCasos />
          </Route>
          <Footer />
          <Route exact path={"/user/abogado/gestionar-turnos"} ><TurnosAbogado /></Route>
        </div>
      </Switch>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
