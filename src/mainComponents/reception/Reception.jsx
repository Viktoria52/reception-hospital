import ReceptionForm from "./receptionForm/ReceptionForm";
import ReceptionList from "./receptionList/ReceptionList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setTittle} from "../../state/auth";


const Reception = () => {
    const {reception} = useSelector(state => state.receptionReducer);
    const {title} = useSelector((state) => state.authReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setTittle('Приемы'))
    }, [reception, title])

    // const state = useSelector((state) => state)

    return (<div>
            <header><ReceptionForm/></header>

            <main><ReceptionList/></main>
        </div>
    )

}

export default Reception