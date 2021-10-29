import './App.css';
import HomePage from './components/home-page/HomePage';
import { Route } from 'react-router-dom';
<<<<<<< HEAD
import HomeAbogado from './components/homeAbogado/homeAbogado';
=======
import Signin from './components/Sign/singnin';
import Signup from './components/Sign/signup';
>>>>>>> origin/k-b

function App() {
  return (
    <div className="App container-fluid p-0">
<<<<<<< HEAD
      {/* <Route path="/ingreso">
        <SignIn></SignIn>
      </Route> */}
      <Route path={"/abogado"} exact>
        <HomeAbogado />
      </Route>
      <Route path="/" exact>
        <HomePage />
      </Route>
=======
      <Route exact path="/" component ={HomePage}/>
      <Route exact path="/signin" component ={Signin}/>
      <Route exact path="/signup" component ={Signup}/>
>>>>>>> origin/k-b
    </div>
  );
}

export default App;
