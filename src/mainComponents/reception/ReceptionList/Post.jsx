import style from "./receptionList.module.css"
import {changeReceptionAC, idEditReception} from "../../../state/reception";
import {Link} from "react-router-dom";
import { Redirect } from 'react-router'
import {useState} from "react";


const Post = (props) => {
    const [edit, setEdit] = useState(false)
    return (
        <div className={style.main}>
            <div className={style.border}> {props.name}</div>
            <div className={style.doc}> {props.nameDoc} </div>
            <div className={style.date}>{props.date}</div>
            <div className={style.complaints}>{props.complaints}</div>
            <div className={style.buttons}>
                <div
                    onClick={() => {
                        // console.log(props.id)
                        props.deleteReception(props.id)
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
        </div>
        </div>
    )
}


export default Post