import React, {useEffect} from 'react'
import './App.css';
import {Switch} from 'react-router-dom'
import Reception from "./mainComponents/reception/Reception";
import ContainerAuthorization from "./mainComponents/authorization/containerAuthorization";
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {AuthReducer} from "./state/authReducer";
import PrivateRoute from "./ReactRoute";
import Preloader from "./assets/Preloader";
import Header from "./mainComponents/header/header";


const App = () => {
    const {tokenAuth, isAuth} = useSelector((state) => state.authReducer)
    const {preloader, preloaderDelete} = useSelector((state) => state.receptionReducer)
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
        if (tokenAuth) {
            dispatch(AuthReducer(true))
        }
        if (!isAuth) {
            history.push('/')
        }
        if (isAuth) {
            history.push('/reception')
        }
    }, [tokenAuth])

    // console.log(preloader)
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
                        to={'/'}
                        Component={Reception}/>
                    <PrivateRoute
                        auth={!isAuth}
                        exact path={'/'}
                        to={'/reception'}
                        Component={ContainerAuthorization}/>
                </Switch>
            </main>
        </div>
    );
}

export default App
