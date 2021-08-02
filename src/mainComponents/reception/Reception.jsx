import ReceptionForm from "./receptionForm/ReceptionForm";
import ReceptionList from "./receptionList/ReceptionList";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import EditWindow from "./editReception/EditWindow";
import DeleteReception from "./deleteReception/deleteReception";
import Header from "../header/header";
import './Reception.css'
import {setTittle} from "../../state/actions/authActions";

const Reception = () => {
    const {reception, flagEdit, flagDelete} = useSelector(state => state.receptionReducer);
    const {title, isAuth, } = useSelector((state) => state.authReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setTittle('Приемы'))
    }, [reception, title])

    return (<div className={'StyleDelete'}>
            {flagEdit &&
            <EditWindow/>
            }
            {flagDelete &&
            <DeleteReception/>}
            {isAuth &&
                <header className="App-header">
                    <Header/>
                </header>
            }
            <header className={'receptionForm'}><ReceptionForm/></header>
            <main className={'mainListPad'}><ReceptionList/></main>
        </div>
    )

}
export default Reception