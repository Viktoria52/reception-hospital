import ReceptionForm from "./ReceptionForm/ReceptionForm";
import ReceptionList from "./ReceptionList/ReceptionList";
import {connect, useSelector} from "react-redux";
import docReducer, {getDocs} from "../../state/doc";
import {
    addReceptionCreator,
    changeReception, changeReceptionAC,
    deleteReception,
    getReceptions, idEditReception,
    newReception
} from "../../state/reception";


const Reception = (props) => {
    const state = useSelector((state) => state)
    return (<div>
            <header><ReceptionForm
                docs = {state}
                getDocs = {props.getDocs}
                changeReception={props.changeReception}
                newReception={props.newReception}
                addReceptionCreator={props.addReceptionCreator}

            /></header>


            <main><ReceptionList
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


export default connect(null, {getDocs,getReceptions,
    changeReception,newReception,
    deleteReception,idEditReception,
    changeReceptionAC})(Reception);