import './App.css';
import {Route,Switch } from 'react-router-dom'
// import Login from "./mainComponents/authorization/Login/Login";
import Reception from "./mainComponents/reception/Reception";
import NewReception from "./mainComponents/newReception/NewReception";
// import Register from "./mainComponents/authorization/register/register";
import ContainerAuthorization from "./mainComponents/authorization/containerAuthorization";
import Login from "./mainComponents/authorization/Login/Login";
import Register from "./mainComponents/authorization/register/register";

function App() {

  return (
    <div className="App">
            <header className="App-header">

            </header>
         <main>
             <ContainerAuthorization />
             <Switch>
                 {/*<Route path="/login">*/}
                 {/*    <Login />*/}
                 {/*</Route>*/}
                 {/*<Route path="/registration">*/}
                 {/*    <Register />*/}
                 {/*</Route>*/}
                 <Route path="/reception">
                     <Reception />
                 </Route>
                 <Route path="/newReception">
                     <NewReception />
                 </Route>
             </Switch>
         </main>

    </div>
  );
}

export default App;
