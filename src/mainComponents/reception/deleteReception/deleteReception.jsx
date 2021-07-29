import s from './deleteReception.module.css'
import React, {useState} from "react";
import {Redirect} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {deleteReception} from "../../../state/receptionReducer";
import PreloaderForDelete from "../../../assets/PreloaderForDelete";
import {setDeleteMode} from "../../../state/actions/receptionAC";

const DeleteReception = () => {
    const {idDelete,preloaderDelete} = useSelector((state) => state.receptionReducer)
    const dispatch = useDispatch()

    const [flag, setFlag] = useState(false)
    return (<div className={s.containerDelete}>
            {
                preloaderDelete &&
                <PreloaderForDelete />
            }
        <div className={s.main}>
            <div className={s.delete}>Удалить прием </div>
            <div className={s.caption}>Вы действительно хотите удалить прием ?</div>
            <div className={s.buttons}>
                <button
                    onClick={()=>{
                        setFlag(!flag)
                        dispatch(setDeleteMode(false))
                    }}
                    className={s.cancel}>Cancel</button>
                <button
                    onClick={async()=>{
                        await dispatch(deleteReception(idDelete))
                        dispatch(setDeleteMode(false))
                    }}
                    className={s.deleteButton}>Delete</button>
                {flag ?
                    <Redirect to={'/reception'}/> :
                    null}
            </div>
        </div>
    </div>

    )
}
export default DeleteReception