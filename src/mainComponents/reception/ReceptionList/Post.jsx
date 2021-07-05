import style from "./receptionList.module.css"


const Post = (props) => {
    return (
        <div className={style.main}>
            <div className={style.border}> {props.name}</div>
            <div className={style.doc}> {props.nameDoc} </div>
            <div className={style.date}>{props.date}</div>
            <div className={style.complaints}>{props.complaints}</div>
            <div className={style.buttons}>
                <div className={style.delete}></div>
                <div className={style.edit}></div>
            </div>
        </div>
    )
}

export default Post