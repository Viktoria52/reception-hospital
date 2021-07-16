import React from "react";
import style from "./receptionList.module.css"
import {useDispatch} from "react-redux";
import {
    changeReceptionAC,
    deleteReceptionAC,
    setDeleteMode,
    setEditMode
} from "../../../state/receptionReducer";


const Post = (props) => {
    const dispatch = useDispatch()

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
                        dispatch(setDeleteMode(true)) // окно удаления
                    }}
                    className={style.delete}/>
                <div
                    onClick={async () => {
                        await dispatch(changeReceptionAC(props.name, props.nameDoc, props.date, props.complaints, props.id))
                        dispatch(setEditMode(true)) // окно редактирования
                    }}
                    className={style.edit}
                />

            </div>
        </div>
    )
}
export default Post