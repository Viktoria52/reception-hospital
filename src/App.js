import React from 'react'
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Reception from "./mainComponents/reception/Reception";
import ContainerAuthorization from "./mainComponents/authorization/containerAuthorization";
import EditWindow from "./mainComponents/reception/editReception/EditWindow";
import {Redirect} from "react-router";
import DeleteReception from "./mainComponents/reception/ReceptionList/deleteReception/deleteReception";

let token1 = localStorage.getItem('token')

const App = () => {

        // console.log(this.props.initial)
        // if (!this.props.initial) {
        //     return <Preloader/>
        // }
        return (
            <div className="App">
                <Route path="/reception/EditWindow">
                    <div className='containerEditWindow'>
                        <div className='editWindow'>
                            <EditWindow
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
                        <DeleteReception/>
                    </div>

                </Route>
                <header className="App-header">
                    {/*<Route path={"/"}>*/}
                    {/*    Войти в систему*/}
                    {/*</Route>*/}
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
                <main className='main'>
                    <div className='main'>
                        <Switch>
                            <Route path="/reception">
                                <Reception/>
                            </Route>
                            <Route path='/'>
                                <div className='containerAuth'>
                                    <ContainerAuthorization/>
                                </div>
                            </Route>
                        </Switch>
                    </div>

                </main>

            </div>
        );
}

export default App
