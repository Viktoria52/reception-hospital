import React, {useEffect} from "react";
import style from "./receptionList.module.css"
import {Redirect} from 'react-router'
import {useState} from "react";
import DeleteReception from "./deleteReception/deleteReception";
import {changeReceptionAC, changeReceptionId} from "../../../state/reception";
import {useSelector} from "react-redux";


const Post = (props) => {
    // console.log(props)

    const [edit, setEdit] = useState(false)
    const [deleteMode, setDelete] = useState(false)
    useEffect(() => {

    })

    return (
        <div className={style.main}>
            <div className={style.border}> {props.name}</div>
            <div className={style.doc}> {props.nameDoc} </div>
            <div className={style.date}>{props.date}</div>
            <div className={style.complaints}>{props.complaints}</div>
            <div className={style.buttons}>
                <div
                    onClick={async () => {
                        await props.deleteReceptionAC(props.id)
                        setDelete(true)
                    }}
                    className={style.delete}/>
                <div
                    onClick={async () => {
                        await props.changeReceptionAC(props.name, props.nameDoc, props.date, props.complaints, props.id)
                        await props.changeReceptionId(props.id)
                        setEdit(!edit)
                    }}
                    className={style.edit}
                > </div>
                {
                    edit && <Redirect to={'/reception/editWindow'}/>
                }
                {deleteMode &&
                <Redirect to={'/reception/delete'}>
                    <div className={style.deleteReceptionWindow}>
                        <DeleteReception
                            // idEdit={props.idEdit}
                            deleteReception={props.deleteReception}
                            // changeReceptionAC={props.changeReceptionAC}
                        />
                    </div>
                </Redirect>
                }
            </div>
        </div>
    )
}
export default Post