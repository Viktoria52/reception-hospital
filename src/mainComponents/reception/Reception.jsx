import ReceptionForm from "./ReceptionForm/ReceptionForm";
import ReceptionList from "./ReceptionList/ReceptionList";
import {connect, useSelector} from "react-redux";
import docReducer, {getDocs} from "../../state/doc";
import {
    addReceptionCreator,
    changeReception,
    deleteReception, deleteReceptionAC,
    getReceptions, getSortData, idEditReception,
    newReception, changeReceptionAC, changeReceptionId
} from "../../state/reception";
import {useEffect, useState} from "react";
import {sortValueAC, triage} from "../../state/sort";


const Reception = (props) => {
    // console.log(props.state.receptionReducer.reception)
    // console.log(props.state.receptionReducer.reception)
    const [reception, newRec] = useState(props.state.receptionReducer.reception);
    useEffect(() =>{
        newRec(props.state.receptionReducer.reception);
    }, [props.state.receptionReducer.reception])
    // console.log(props.state.receptionReducer.reception)

    const state = useSelector((state) => state)
    return (<div>
            <header><ReceptionForm
                docs = {state}
                getDocs = {props.getDocs}
                // changeReception={props.changeReception}
                newReception={props.newReception}
                addReceptionCreator={props.addReceptionCreator}
            /></header>

            <main><ReceptionList
                getSortData = {props.getSortData}
                valueSorting = {state.sortValue.valueSorting}
                valueOption = {state.sortValue.valueOption}
                triage={props.triage}
                sortValueAC={props.sortValueAC}
                reception ={reception}
                deleteReceptionAC={props.deleteReceptionAC}
                idEditReception={props.idEditReception}
                docs = {state}
                getDocs = {props.getDocs}
                getReceptions = {props.getReceptions}
                deleteReception={props.deleteReception}
                changeReceptionAC={props.changeReceptionAC}
                changeReceptionId={props.changeReceptionId}

            /></main>
        </div>
    )

}

let mapStateToProps = (state) => ({
        state: state,
    // valueOption: state.sortReducer.
})

export default connect(mapStateToProps, {getDocs,getReceptions,
    changeReception,newReception,
    deleteReception,idEditReception,
    deleteReceptionAC,
    sortValueAC,triage,
    getSortData,changeReceptionAC,
    changeReceptionId})(Reception);