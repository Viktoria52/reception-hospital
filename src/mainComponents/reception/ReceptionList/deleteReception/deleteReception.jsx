import s from './deleteReception.module.css'

const DeleteReception = (props) => {

    return (
        <div className={s.main}>
            <div className={s.delete}>Удалить прием </div>
            <div className={s.caption}>Вы действительно хотите удалить прием ?</div>
            <div className={s.buttons}>
                <button className={s.cancel}>Cancel</button>
                <button className={s.deleteButton}>Delete</button>
            </div>
        </div>
    )
}


export default DeleteReception