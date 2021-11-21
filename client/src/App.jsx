import { Route, Switch } from "react-router-dom";
import { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "@firebase/auth";
import { getMaterias, getProvincias, getUsuario, getAbogados, getAbout, getItems } from "./redux/actions";
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
import Loaded from "./components/Loaded/Loaded";
import FormCasos from "./components/FormCasos/FormCasos";
import HomeUsuario from "./components/homeUsuario/HomeUsuario";
import ConsultasUsuario from "./components/homeUsuario/consultasUsuario/ConsultasUsuario";
import TurnosUsuarios from "./components/homeUsuario/turnosUsuario/TurnosUsuario";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminPage from "./components/admin/adminPage/adminPage";
import TurnosAbogado from "./components/home-Abogado/turnos/TurnosAbogado";
import "./App.css";
import SiteMateria from "./components/Materia/SiteMaterias/SiteMaterias"
import Clients from "./components/home-Abogado/clients/clients";
import NewPass from "./components/Sign/newpass.js";
import ErrorPag from "./components/Error404/ErrorPag";
import TurnosUsuario from "./components/homeUsuario/turnosUsuario/TurnosUsuario";
import AdminUsersPage from "./components/admin/adminUsersPage/adminUsersPage";
import AdminNewUsersPage from "./components/admin/adminNewUsersPage/adminNewUsersPage";
import AdminClientes from "./components/admin/adminClients/clientes";
import AdminBannedUsersPage from "./components/admin/adminBannedUsersPage/adminBannedUsersPage";

function App() {
  const dispatch = useDispatch();
  const { usuario } = useSelector((state) => state);

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
    dispatch(getAbout());
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div>
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
        <Route exact path="/ingreso" component={Signin} />
        <Route exact path="/cita" component={FormCita} />
        <Route exact path="/Cambiopass" component={NewPass} />

        <Route exact path="/user/panel">
          <HomeUsuario />
        </Route>
        <Route
          exact
          path={usuario?.clienteId != null ? "/user/panel/turnos" : "/"}
        >
          {<TurnosUsuarios/>}
        </Route>
        <Route exact
          path={usuario?.adminId != null ? "/admin" : "/"}
          component={AdminPage}
        ></Route>
        <Route exact path={usuario?.adminId != null ?"/admin/users" : "/"} component={AdminUsersPage} />
          <Route exact path={usuario?.adminId != null ? "/admin/users/new" : "/"} component={AdminNewUsersPage} />
          <Route exact path={usuario?.adminId != null ? "/admin/users/clientes" : "/"}  component={AdminClientes} />
          <Route exact 
            path={usuario?.adminId != null ? "/admin/users/banned" : "/"}  
            
            component={AdminBannedUsersPage}
          />
        <div >
          <NavAbogado />
          <Route
            exact
            path={usuario?.abogadoId != null ? "/user/abogado" : "/"}
          >
            {<HomeAbogado />}
          </Route>
          <Route
            exact
            path={
              usuario?.abogadoId != null ? "/user/abogado/clientes" : "/"
            }
          >
            {<Clients /> }
          </Route>
          <Route
            exact
            path={
              usuario?.abogadoId != null
                ? "/user/abogado/consultas"
                : "/"
            }
          >
            {<VistaConsultasAbogado />}
          </Route>
          <Route
            exact
            path={
              usuario?.abogadoId != null ? "/user/abogado/casos" : "/"
            }
          >
            {<Clientes />}
          </Route>
          <Route
            exact
            path={
              usuario?.abogadoId != null
                ? "/user/abogado/modificar-perfil"
                : "/"
            }
            component={ModificarAbogado}
          ></Route>
          <Route
            exact
            path={
              usuario?.abogadoId != null
                ? "/user/abogado/gestionar-turnos"
                : "/"
            }
          >
            {<TurnosAbogado />}
          </Route>
          <Route
            exact
            path={
              usuario?.abogadoId != null
                ? "/user/abogado/nuevo-caso"
                : "/"
            }
          >
            {<FormCasos />}
          </Route>
          <Footer />
        </div>
        <Route component={ErrorPag} path="/:rest*" />
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;
