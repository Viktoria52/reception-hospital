import ReceptionForm from "./ReceptionForm/ReceptionForm";
import ReceptionList from "./ReceptionList/ReceptionList";
import {connect, useSelector} from "react-redux";
import docReducer, {getDocs} from "../../state/doc";
import {
    addReceptionCreator,
    changeReception, changeReceptionAC,
    deleteReception, deleteReceptionAC,
    getReceptions, idEditReception,
    newReception
} from "../../state/reception";
import {useEffect, useState} from "react";
import {sortValueAC} from "../../state/sort";


const Reception = (props) => {
    // console.log(props)
    // console.log(props.state.receptionReducer.reception)
    // console.log(props.state.receptionReducer.reception)
    const [reception, newRec] = useState(props.state.receptionReducer.reception);
    useEffect(() =>{
        newRec(props.state.receptionReducer.reception);
    }, [props.state.receptionReducer.reception])

    const state = useSelector((state) => state)
    console.log(state)
    return (<div>
            <header><ReceptionForm
                docs = {state}
                getDocs = {props.getDocs}
                changeReception={props.changeReception}
                newReception={props.newReception}
                addReceptionCreator={props.addReceptionCreator}

            /></header>


            <main><ReceptionList
                sortValueAC={props.sortValueAC}
                reception ={reception}
                deleteReceptionAC={props.deleteReceptionAC}
                idEditReception={props.idEditReception}
                docs = {state}
                getDocs = {props.getDocs}
                getReceptions = {props.getReceptions}
                deleteReception={props.deleteReception}
                changeReceptionAC={props.changeReceptionAC}

            /></main>
        </div>
    )

}

let mapStateToProps = (state) => ({
        state: state
})

export default connect(mapStateToProps, {getDocs,getReceptions,
    changeReception,newReception,
    deleteReception,idEditReception,
    changeReceptionAC,deleteReceptionAC,sortValueAC})(Reception);