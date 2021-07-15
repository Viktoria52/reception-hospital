import ReceptionForm from "./ReceptionForm/ReceptionForm";
import ReceptionList from "./ReceptionList/ReceptionList";
import {connect, useDispatch, useSelector} from "react-redux";
import docReducer, {getDocs} from "../../state/doc";
import {
    addReceptionCreator,
    changeReception,
    deleteReception, deleteReceptionAC,
    getReceptions, getSortData, idEditReception,
    changeReceptionAC, changeReceptionId
} from "../../state/reception";
import {useEffect, useState} from "react";
import {sortValueAC, triage} from "../../state/sort";
import {setTittle} from "../../state/auth";


const Reception = (props) => {
    // console.log(props.state.receptionReducer.reception)
    // console.log(props.state.receptionReducer.reception)
    const {reception} = useSelector(state => state.receptionReducer);
    const { title} = useSelector((state) => state.authReducer)

    const dispatch = useDispatch()
    useEffect(() =>{

        dispatch(setTittle('Приемы'))
    }, [reception,title ])

    const state = useSelector((state) => state)

    return (<div>
            <header><ReceptionForm/></header>

            <main><ReceptionList
                getSortData = {getSortData}
                valueSorting = {state.sortValue.valueSorting}
                valueOption = {state.sortValue.valueOption}
                triage={triage}
                sortValueAC={sortValueAC}
                reception ={reception}
                deleteReceptionAC={deleteReceptionAC}
                idEditReception={idEditReception}
                docs = {state}
                getDocs = {getDocs}
                getReceptions = {getReceptions}
                deleteReception={deleteReception}
                changeReceptionAC={changeReceptionAC}
                changeReceptionId={changeReceptionId}

            /></main>
        </div>
    )

}

export default Reception