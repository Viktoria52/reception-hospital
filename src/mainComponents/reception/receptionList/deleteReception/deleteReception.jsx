import s from './deleteReception.module.css'
import {useState} from "react";
import {Redirect} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {deleteReception, setDeleteMode} from "../../../../state/receptionReducer";

const DeleteReception = () => {
    const {idDelete} = useSelector((state) => state.receptionReducer)
    const dispatch = useDispatch()

    // console.log(props)
    const [flag, setFlag] = useState(false)
    return (<div className={s.containerDelete}>
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
                        // setFlag(!flag)
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