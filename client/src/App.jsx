import './App.css';
import HomePage from './components/home-page/HomePage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App container-fluid p-0">
      <Route path="/">
        <HomePage />
      </Route>
    </div>
  );
}

export default App;
