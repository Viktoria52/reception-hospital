import ReceptionForm from "./receptionForm/ReceptionForm";
import ReceptionList from "./receptionList/ReceptionList";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {setTittle} from "../../state/authReducer";
import {Route, Switch} from "react-router-dom";
import EditWindow from "./editReception/EditWindow";
import Header from "../header/header";
import DeleteReception from "./receptionList/deleteReception/deleteReception";


const Reception = () => {
    const {reception, flagEdit, flagDelete} = useSelector(state => state.receptionReducer);
    const {title} = useSelector((state) => state.authReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setTittle('Приемы'))
    }, [reception, title])

    // const state = useSelector((state) => state)

    return (<div>
            {flagEdit &&
            <EditWindow/>
            }
            {flagDelete &&
            <DeleteReception/>}

            <header className="App-header">
                <Header/>
            </header>
            <header><ReceptionForm/></header>
            <main><ReceptionList/></main>
        </div>
    )

}
export default Reception