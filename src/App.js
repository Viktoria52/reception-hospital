import React from 'react'
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Reception from "./mainComponents/reception/Reception";
import ContainerAuthorization from "./mainComponents/authorization/containerAuthorization";
import EditWindow from "./mainComponents/reception/editReception/EditWindow";
import Preloader from "./assets/Preloader";
import {connect} from "react-redux";
import {Initialize} from "./state/initial";

// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

class App extends React.Component {
    componentDidMount() {
        this.props.Initialize()
    }

    render() {
        // console.log(this.props.initial)
        if (!this.props.initial) {
            return <Preloader/>
        }
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
                            <Reception/>
                        </Route>
                        <Route path='/'>
                            <ContainerAuthorization/>
                        </Route>
                    </Switch>
                </main>

            </div>
        );

    }

}

const mapStateToProps = (state) => ({
    preloader: state.receptionReducer.preloader,
    initial: state.appReducer.initial
})

export default connect(mapStateToProps, {Initialize})(App)
// export default App;
