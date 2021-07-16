import React, {useEffect} from "react";
import style from "./receptionList.module.css"
import {Redirect} from 'react-router'
import {useState} from "react";
import DeleteReception from "./deleteReception/deleteReception";
import {useDispatch, useSelector} from "react-redux";
import {
    changeReceptionAC,
    changeReceptionId,
    deleteReceptionAC,
    setDeleteMode,
    setEditMode
} from "../../../state/receptionReducer";


const Post = (props) => {
    const dispatch = useDispatch()
    // const [edit, setEdit] = useState(false)
    // const [deleteMode, setDelete] = useState(false)

    return (
        <div className={style.main}>
            <div className={style.border}> {props.name}</div>
            <div className={style.doc}> {props.nameDoc} </div>
            <div className={style.date}>{props.date}</div>
            <div className={style.complaints}>{props.complaints}</div>
            <div className={style.buttons}>
                <div
                    onClick={async () => {
                        await dispatch(deleteReceptionAC(props.id))
                        dispatch(setDeleteMode(true))
                        // setDelete(true)
                    }}
                    className={style.delete}/>
                <div
                    onClick={async () => {
                        await dispatch(changeReceptionAC(props.name, props.nameDoc, props.date, props.complaints, props.id))
                        await dispatch(changeReceptionId(props.id))
                        dispatch(setEditMode(true))
                        // setEdit(!edit)
                    }}
                    className={style.edit}
                />
                {/*{*/}
                {/*    edit && <Redirect to={'/reception/editWindow'}/>*/}
                {/*}*/}
                {/*{deleteMode &&*/}
                {/*<Redirect to={'/reception/delete'}>*/}
                {/*    <div className={style.deleteReceptionWindow}>*/}
                {/*        <DeleteReception*/}
                {/*            // deleteReception={props.deleteReception}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*</Redirect>*/}
                {/*}*/}
            </div>
        </div>
    )
}
export default Post