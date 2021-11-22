import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
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
import Signin from "./components/Sign/singnin";
import FormCasos from "./components/FormCasos/FormCasos";
import HomeUsuario from "./components/homeUsuario/HomeUsuario";
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
import AdminUsersPage from "./components/admin/adminUsersPage/adminUsersPage";
import AdminNewUsersPage from "./components/admin/adminNewUsersPage/adminNewUsersPage";
import AdminClientes from "./components/admin/adminClients/clientes";
import AdminBannedUsersPage from "./components/admin/adminBannedUsersPage/adminBannedUsersPage";
import ModifierHome from "./components/admin/adminHome/modifierHome";
import ConsultasUsuario from "./components/homeUsuario/consultasUsuario/ConsultasUsuario";
import UsuCaso from "./components/Usuario-casos/clientes";

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
          {usuario?.adminId == null && 
          usuario?.abogadoId == null &&
          usuario?.clienteId != null ? <HomeUsuario /> : <ErrorPag/>}
        </Route>
        <Route exact path={"/user/panel/turnos"}>
          {usuario?.adminId == null && 
          usuario?.abogadoId == null &&
          usuario?.clienteId != null ? <TurnosUsuarios/> : <ErrorPag/>}
        </Route>
        <Route exact path={"/user/panel/consultas"}>
          {usuario?.adminId == null && 
          usuario?.abogadoId == null &&
          usuario?.clienteId != null ? <ConsultasUsuario/> : <ErrorPag/>}
        </Route>
        <Route exact path={"/user/panel/casos"}>
          {usuario?.adminId == null && 
          usuario?.abogadoId == null &&
          usuario?.clienteId != null ? <UsuCaso/> : <ErrorPag/>}
        </Route>
        <Route exact path={"/admin"} component={usuario?.adminId != null ? AdminPage : ErrorPag}/>
        <Route exact path={"/admin/users"} component={usuario?.adminId != null ? AdminUsersPage : ErrorPag} />
        <Route exact path={"/admin/users/new"} component={usuario?.adminId != null ? AdminNewUsersPage : ErrorPag} />
        <Route exact path={"/admin/users/clientes"}  component={usuario?.adminId != null ? AdminClientes : ErrorPag} />
        <Route exact path={"/admin/users/banned"} component={usuario?.adminId != null ? AdminBannedUsersPage : ErrorPag}/>
        <Route exact path={"/admin/About"} component={usuario?.adminId != null ? ModifierHome : ErrorPag} />
        
        <Route exact path="/user/abogado" >
          {usuario?.abogadoId != null ? <HomeAbogado /> : <ErrorPag/>}
        </Route>
        <Route exact path= "/user/abogado/clientes">
          {usuario?.abogadoId != null ? <Clients /> : <ErrorPag/>}
        </Route>
        <Route exact path= "/user/abogado/consultas">
          {usuario?.abogadoId != null ? <VistaConsultasAbogado /> : <ErrorPag/>}
        </Route>
        <Route exact path= "/user/abogado/casos" >
          {usuario?.abogadoId != null ? <Clientes /> : <ErrorPag/>}
        </Route>
        <Route exact path= "/user/abogado/modificar-perfil" 
          component={usuario?.abogadoId != null ? ModificarAbogado : ErrorPag } />
        <Route exact path= "/user/abogado/gestionar-turnos" >
          {usuario?.abogadoId != null ? <TurnosAbogado /> : <ErrorPag/>}
        </Route>
        <Route exact path= "/user/abogado/nuevo-caso" >
          {usuario?.abogadoId != null ? <FormCasos /> : <ErrorPag/>}
        </Route>
        <Route component={ErrorPag} path="/:rest*" />
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;
