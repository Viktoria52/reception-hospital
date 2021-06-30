import './App.css';
import {Route,Switch } from 'react-router-dom'
import Login from "./mainComponents/register/Login";
import Reception from "./mainComponents/reception/Reception";
import Nav from "./mainComponents/nav/nav";
import NewReception from "./mainComponents/newReception/NewReception";

function App() {

  return (
    <div className="App">
      <header className="App-header">
          <Nav />
          <Switch>
              <Route path="/login">
                  <Login />
              </Route>
              <Route path="/reception">
                  <Reception />
              </Route>
              <Route path="/newReception">
                  <NewReception />
              </Route>
          </Switch>
      </header>
    </div>
  );
}

export default App;
