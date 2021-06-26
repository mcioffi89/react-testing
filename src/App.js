import logo from './logo.svg';
import './App.css';
import Dettaglio from './Dettaglio';
import Lista from './Lista'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Container>
        <Router>
          <Switch>
            <Route path="/lista">
              <Lista />
            </Route>
            <Route path="/dettaglio/:id">
              <Dettaglio />
            </Route>
            <Route path="/dettaglio">
              <Dettaglio />
            </Route>
            <Route exact={true} path="/">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello!</p>
              </header>
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
