import React, {useEffect} from 'react'
import './App.css';
import {Switch} from 'react-router-dom'
import Reception from "./mainComponents/reception/Reception";
import ContainerAuthorization from "./mainComponents/authorization/containerAuthorization";
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import PrivateRoute from "./ReactRoute";
import Preloader from "./assets/Preloader";
import Header from "./mainComponents/header/header";
import tokenServise from "./api/tokenServise";
import {AuthReducer} from "./state/actions/authActions";


const App = () => {
    const {tokenAuth, isAuth} = useSelector((state) => state.authReducer)
    const {preloader, preloaderDelete} = useSelector((state) => state.receptionReducer)
    const dispatch = useDispatch()
    const history = useHistory()

    let token = tokenServise.getToken()

    useEffect(() => {
        if (token) {
            dispatch(AuthReducer(true))
        }
        if (!isAuth) {
            history.push('/auth')
        }
        if (isAuth) {
            history.push('/reception')
        }
    }, [tokenAuth,  history, dispatch])

    return (
        <div className="App">
            {!isAuth &&
            <Header/>
            }
            <main className='main'>
                {!preloaderDelete && preloader &&
                    <Preloader />
                }
                <Switch>
                    <PrivateRoute
                        auth={isAuth}
                        exact path={'/reception'}
                        to={'/auth'}
                        Component={Reception}/>
                    <PrivateRoute
                        auth={!isAuth}
                        exact path={'/auth'}
                        to={'/reception'}
                        Component={ContainerAuthorization}/>
                </Switch>
            </main>
        </div>
    );
}

export default App
