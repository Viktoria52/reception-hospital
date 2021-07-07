import s from './deleteReception.module.css'
import {useState} from "react";
import {Redirect} from "react-router";

const DeleteReception = (props) => {
    console.log(props)
    const [flag, setFlag] = useState(false)
    return (
        <div className={s.main}>
            <div className={s.delete}>Удалить прием </div>
            <div className={s.caption}>Вы действительно хотите удалить прием ?</div>
            <div className={s.buttons}>
                <button
                    onClick={()=>{
                        setFlag(!flag)
                    }}
                    className={s.cancel}>Cancel</button>
                <button
                    onClick={async()=>{
                        await props.deleteReception(props.idDelete)
                        setFlag(!flag)
                    }}
                    className={s.deleteButton}>Delete</button>
                {flag ?
                <Redirect to={'/reception'}/> :
                null}
            </div>
        </div>
    )
}


export default DeleteReception