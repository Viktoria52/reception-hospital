import React, {useEffect} from 'react'
import './App.css';
import {Link, Route, Switch} from 'react-router-dom'
import Reception from "./mainComponents/reception/Reception";
import ContainerAuthorization from "./mainComponents/authorization/containerAuthorization";
import EditWindow from "./mainComponents/reception/editReception/EditWindow";
import {Redirect} from "react-router";
import DeleteReception from "./mainComponents/reception/receptionList/deleteReception/deleteReception";
import {useDispatch, useSelector} from "react-redux";
import {Auth} from "./state/auth";
import Header from "./mainComponents/header/header";
import Preloader from "./assets/Preloader";

const App = () => {
    const {tokenAuth, isAuth} = useSelector((state) => state.authReducer)
    const {preloader} = useSelector((state) => state.receptionReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        if (tokenAuth) {
            dispatch(Auth(true))
        }
    }, [tokenAuth])

    // if (preloader) {
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
                isAuth ?
                    <Redirect from={'/'} to={'/reception'}/> :
                    <Redirect to={'/'}/>
            }
            {/*<Redirect to={'/'}/>*/}
            <Route path='/reception/delete'>
                <div className='containerDelete'>
                    <DeleteReception/>
                </div>
            </Route>
            <header className="App-header">
                <Header />




            </header>
            <main className='main'>
                <div className='main'>
                    <Switch>
                        <Route path="/reception">
                            <Reception/>
                        </Route>
                        <Route path='/'>
                            <div className='containerAuth'>
                                <div className='hospital'/>
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
