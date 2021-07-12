import s from './deleteReception.module.css'
import {useState} from "react";
import {Redirect} from "react-router";
import {connect, useSelector} from "react-redux";
import {deleteReception, getReceptions} from "../../../../state/reception";

const DeleteReception = (props) => {
    const {idDelete} = useSelector((state) => state.receptionReducer)
    console.log(idDelete)
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
                        await props.deleteReception(idDelete)
                        await props.getReceptions()
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


export default connect(null,{deleteReception,getReceptions})(DeleteReception)