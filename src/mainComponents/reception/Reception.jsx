import ReceptionForm from "./ReceptionForm/ReceptionForm";
import ReceptionList from "./ReceptionList/ReceptionList";
import {connect, useSelector} from "react-redux";
import docReducer, {getDocs} from "../../state/doc";


const Reception = (props) => {
    const state = useSelector((state) => state)
    console.log(state)
    return (<div>
            <header><ReceptionForm/></header>
            {/* inputs! */}

            <main><ReceptionList
            docs = {state}
            getDocs = {props.getDocs}
            /></main>
        </div>
    )

}

export default connect(null, {getDocs})(Reception);