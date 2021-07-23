import {useForm} from "react-hook-form";
import style from "./ReceptionForm.module.css"
import {useDispatch, useSelector} from "react-redux";
import {newReception} from "../../../state/receptionReducer";

const ReceptionForm = () => {
    const {docs} = useSelector((state) => state.docReducer)
    const {messageTaskCreated} = useSelector((state) => state.receptionReducer)
    const dispatch = useDispatch()
    let elementsDoctors = docs.map(p => <option key={p._id}>{p.name}</option>)

    const onSubmit = (formData) => {
        dispatch(newReception(formData.name, formData.nameDoc, formData.date, formData.complaints))

    };
    console.log(messageTaskCreated)
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    return (<div className={style.line}>
        <form className={style.main} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <p>Имя:</p>
                <input
                    className={style.someButton}
                    {...register("name")}
                    required={true}
                    type="text"/>
            </div>
            <div>
                <p>Врач:</p>
                <select
                    className={style.doctors}
                    {...register("nameDoc")}
                    type="text">
                    <option/>
                    {elementsDoctors}
                </select>
            </div>
            <div>
                <p>Дата:</p>
                <input
                    className={style.someButton}
                    required={true}
                    {...register("date")}
                    type="date"/>
            </div>
            <div>
                <p>Жалобы:</p>
                <input
                    className={style.someButton}
                    {...register("complaints")}
                    required={true}
                    type="text"/>
            </div>
            <div className={style.add}>
                <input
                    className={style.button}
                    value={'Добавить'}
                    type="submit"
                    onClick={() =>
                        setTimeout(() => {
                                reset({name: null})
                        }, 1)
                    }
                />
            </div>
            <div>
            </div>
        </form>
    </div>)
}

export default ReceptionForm;