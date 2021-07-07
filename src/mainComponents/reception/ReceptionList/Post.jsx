import React from "react";
import style from "./receptionList.module.css"
import { Redirect } from 'react-router'
import {useState} from "react";
import DeleteReception from "./deleteReception/deleteReception";




// const sortDate =
const Post = (props) => {
    // console.log(props)

    const [edit, setEdit] = useState(false)
    const [deleteMode, setDelete] = useState(false)

    return (
        <div className={style.main}>
            <div className={style.border}> {props.name}</div>
            <div className={style.doc}> {props.nameDoc} </div>
            <div className={style.date}>{props.date}</div>
            <div className={style.complaints}>{props.complaints}</div>
            <div className={style.buttons}>
                <div
                    onClick={async() => {
                        await props.deleteReceptionAC(props.id)
                        setDelete(true)
                }}
                     className={style.delete}/>
                <div
                    onClick={()=> {
                        props.changeReceptionAC(props.name, props.nameDoc, props.date, props.complaints, props.id)
                        setEdit(!edit)
                    }}
                className={style.edit}

                > </div>
                {edit ?
                <Redirect to={'/reception/editWindow'} /> :
                null}
                {deleteMode ?
                    <Redirect to={'/reception/delete'} >
                        <div className={style.deleteReceptionWindow}>
                            <DeleteReception
                                idEdit={props.idEdit}
                                deleteReception={props.deleteReception}
                                // changeReceptionAC={props.changeReceptionAC}
                            />
                        </div>
                    </Redirect>
                     :
                    null
                }
        </div>
        </div>
    )
}


export default Post