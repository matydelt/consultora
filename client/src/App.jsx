import './App.css';
import HomePage from './components/home-page/HomePage';
import { Route } from 'react-router-dom';
import Signin from './components/Sign/singnin';
import Signup from './components/Sign/signup';

function App() {
  return (
    <div className="App container-fluid p-0">
      <Route exact path="/" component ={HomePage}/>
      <Route exact path="/signin" component ={Signin}/>
      <Route exact path="/signup" component ={Signup}/>
    </div>
  );
}

export default App;
