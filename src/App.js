import React from 'react'
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Reception from "./mainComponents/reception/Reception";
import ContainerAuthorization from "./mainComponents/authorization/containerAuthorization";
import EditWindow from "./mainComponents/reception/editReception/EditWindow";
import Preloader from "./assets/Preloader";
import {connect} from "react-redux";
import {Initialize} from "./state/initial";
import {
    changeReception,
    changeReceptionAC,
    deleteReception,
    deleteReceptionAC,
    idEditReception
} from "./state/reception";
import {Redirect} from "react-router";
import DeleteReception from "./mainComponents/reception/ReceptionList/deleteReception/deleteReception";

// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
let token1 = localStorage.getItem('token')

class App extends React.Component {
    componentDidMount() {
        this.props.Initialize()
    }
    componentDidUpdate(prevProps, prevState) {
        // will be true
        const locationChanged = this.props.location !== prevProps.location;

    }

    render() {
        // console.log(this.props.initial)
        if (!this.props.initial) {
            return <Preloader/>
        }
        return (
            <div className="App">
                <Route path="/reception/EditWindow">
                    <div className='containerEditWindow'>
                        <div className='editWindow'>
                            <EditWindow
                                reception={this.props.reception}
                                idEdit={this.props.idEdit}
                                changeReceptionAC={this.props.changeReceptionAC}
                                receptionsForEdit={this.props.receptionsForEdit}
                                changeReception={this.props.changeReception}
                            />
                        </div>
                    </div>
                </Route>
                {
                    !token1 ?
                        <Redirect to={'/'}/> :
                        <Redirect to={'/reception'} />
                }
                <Route path='/reception/delete'>
                    <div className='containerDelete'>
                        <DeleteReception
                            idDelete={this.props.idDelete}
                            deleteReception={this.props.deleteReception}
                        />
                    </div>

                </Route>
                <header className="App-header">
                    <Route path={"/authorization"}>
                        Войти в систему
                    </Route>
                    <Route path="/reception">
                        <img className="logo"/>
                        <p className="complaints">Приемы </p>
                        <button
                        onClick={()=>{
                            localStorage.removeItem('token');
                        }}
                        >Выход</button>
                    </Route>
                </header>
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
    initial: state.appReducer.initial,
    reception: state.receptionReducer.reception,
    idEdit: state.receptionReducer.idEdit,
    receptionsForEdit: state.receptionReducer,
    idDelete: state.receptionReducer.idDelete
})

export default connect(mapStateToProps,
    {Initialize, changeReceptionAC, changeReception,deleteReceptionAC,deleteReception})(App)
// export default App;
