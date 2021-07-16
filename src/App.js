import React, {useEffect} from 'react'
import './App.css';
import {Link, Route, Switch} from 'react-router-dom'
import Reception from "./mainComponents/reception/Reception";
import ContainerAuthorization from "./mainComponents/authorization/containerAuthorization";
import EditWindow from "./mainComponents/reception/editReception/EditWindow";
import {Redirect, useHistory} from "react-router";
import DeleteReception from "./mainComponents/reception/receptionList/deleteReception/deleteReception";
import {useDispatch, useSelector} from "react-redux";
import {AuthReducer} from "./state/authReducer";
import Header from "./mainComponents/header/header";
import Preloader from "./assets/Preloader";
import PrivateRoute from "./ReactRoute";

const App = () => {
    const {tokenAuth, isAuth} = useSelector((state) => state.authReducer)
    const {preloader} = useSelector((state) => state.receptionReducer)
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
    console.log(isAuth)
    // if (preloader) {
    //     return <Preloader/>
    // }

    return (
        <div className="App">
            {/*<Route path="/reception/EditWindow">*/}
            {/*    <EditWindow/>*/}
            {/*</Route>*/}
            {/*    <Route path="/reception/EditWindow">*/}

                {/*</Route>*/}
            {/*<Switch>*/}
            {/*    <PrivateRoute auth={isAuth} exact path={'/reception/EditWindow'} to={'/reception'} Component={EditWindow}/>*/}
            {/*</Switch>*/}

            {/*{*/}
            {/*    isAuth ?*/}
            {/*        <Redirect from={'/'} to={'/reception'}/> :*/}
            {/*        <Redirect to={'/'}/>*/}
            {/*}*/}

            {/*<Route path='/reception/delete'>*/}
            {/*    <DeleteReception/>*/}
            {/*</Route>*/}
            <PrivateRoute auth={isAuth} exact path={'/reception/delete'} to={'/reception'} Component={DeleteReception}/>

            <main className='main'>
                <Switch>
                    {/*<Route path="/reception">*/}
                    {/*    <Reception/>*/}
                    {/*</Route>*/}

                    <PrivateRoute auth={isAuth} exact path={'/reception'} to={'/'} Component={Reception}/>

                    {/*<Route path='/'>*/}
                        {/*<div className='containerAuth'>*/}
                        {/*    <div className='hospital'/>*/}
                    <PrivateRoute auth={!isAuth} exact path={'/'} to={'/reception'} Component={ContainerAuthorization}/>
                        {/*<ContainerAuthorization/>*/}
                    {/*</div>*/}
                    {/*</Route>*/}
                </Switch>
            </main>
        </div>
    );
}

export default App
