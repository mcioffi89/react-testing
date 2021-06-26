import logo from './logo.svg';
import './App.css';
import Contatore from './Contatore';
import Lista from './Lista'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/lista">
            <Lista />
          </Route>
          <Route path="/contatore/:initalValue">
            <Contatore />
          </Route>
          <Route exact={true} path="/">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Hi</p>
            </header>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
