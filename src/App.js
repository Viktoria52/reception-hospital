import './App.css';
import {Route,Switch } from 'react-router-dom'
import Reception from "./mainComponents/reception/Reception";
import ContainerAuthorization from "./mainComponents/authorization/containerAuthorization";
import EditWindow from "./mainComponents/reception/editReception/EditWindow";

function App() {

  return (
    <div className="App">
        <header className="App-header">
            <Route path="/reception">
                Приемы
            </Route>
        </header>
        <div>
            {/*<EditWindow />*/}
        </div>
        <main>
            <Switch>


                <Route path="/reception">
                    <Reception />
                </Route>

                <Route path='/'>
                    <ContainerAuthorization />
                </Route>
            </Switch>
        </main>

    </div>
  );
}

export default App;
