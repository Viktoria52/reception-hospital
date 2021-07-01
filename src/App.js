import './App.css';
import {Route,Switch } from 'react-router-dom'
import Reception from "./mainComponents/reception/Reception";
import NewReception from "./mainComponents/newReception/NewReception";
import ContainerAuthorization from "./mainComponents/authorization/containerAuthorization";

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
