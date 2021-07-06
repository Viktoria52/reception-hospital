import { useForm } from "react-hook-form";
import style from "../reception.module.css"


// let elementsDoctors = doctors.map(p => <option>{p}</option>)

const ReceptionForm = (props) => {
    let docs = props.docs.docReducer.docs || [];

    let elementsDoctors = docs.map(p => <option key={p._id}>{p.name}</option>)

    const onSubmit = (formData) => {
        // props.addReceptionCreator(formData.name,formData.nameDoc, formData.date, formData.complaints)
        props.newReception(formData.name,formData.nameDoc, formData.date, formData.complaints)
    };

    const { register, handleSubmit } = useForm();
    return (<div className={style.line}>

        <form className={style.main} onSubmit={handleSubmit(onSubmit)}>

            <div>
                <p>Имя:</p>
                <input
                    className={style.someButton}
                    {...register("name")}
                    type="text" />
            </div>
            <div>
                <p>Врач:</p>
                <select
                    className={style.doctors}
                    {...register("nameDoc")}
                    type="text" >
                    <option></option>
                    {elementsDoctors}
                </select>
            </div>
            <div>
                <p>Дата:</p>
                <input
                    className={style.someButton}
                    {...register("date")}
                    type="date" />
            </div>
            <div>
                <p>Жалобы:</p>
                <input
                    className={style.someButton}
                    {...register("complaints")}
                    type="text" />
            </div>
            <div className={style.add}>
                <input
                    className={style.button}
                    value={'Добавить'}
                    type="submit" />
            </div>
        </form>
    </div>)
}

export default ReceptionForm;