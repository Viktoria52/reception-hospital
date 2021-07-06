import style from "./receptionList.module.css"


const Post = (props) => {
    // console.log(props.id)
    const id = props.id
    // console.log(id)

    console.log(props.id)
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
                <div className={style.edit}/>
            </div>
        </div>
    )
}

export default Post