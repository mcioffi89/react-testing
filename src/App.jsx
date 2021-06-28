import logo from './logo.svg'
import './App.css'
import Dettaglio from './Dettaglio'
import Lista from './Lista'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import { Container, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectLoader } from './features/loader/loaderSlice'

function App() {

  const loader = useSelector(selectLoader)
  console.log(loader)

  return (
    <div>

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

      {loader ? <Spinner className="d-flex Spinner-position" animation="border" variant="primary" /> : null}

    </div >

  );
}

export default App;
