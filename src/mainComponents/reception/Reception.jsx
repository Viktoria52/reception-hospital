import ReceptionForm from "./receptionForm/ReceptionForm";
import ReceptionList from "./receptionList/ReceptionList";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {setTittle} from "../../state/authReducer";
import EditWindow from "./editReception/EditWindow";
import DeleteReception from "./deleteReception/deleteReception";
import Header from "../header/header";


const Reception = () => {
    const {reception, flagEdit, flagDelete} = useSelector(state => state.receptionReducer);
    const {title, isAuth} = useSelector((state) => state.authReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setTittle('Приемы'))
    }, [reception, title, dispatch])

    return (<div>
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

            <header><ReceptionForm/></header>
            <main><ReceptionList/></main>
        </div>
    )

}
export default Reception