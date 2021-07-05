import { useForm } from "react-hook-form";
import style from "../reception.module.css"


// let doctors = ["Андреев Андрей Андреевич",
//     "Семенов Илья Петрович",
//     "Пономарева Ксения Павловна",
//     "Елисеева Василиса Денисовна",
//     ]
// let elementsDoctors = doctors.map(p => <option>{p}</option>)



const ReceptionForm = (props) => {
    const onSubmit = (formData) => {

    };
    const { register, handleSubmit } = useForm();
    return (<div className={style.line}>

        <form className={style.main} onSubmit={handleSubmit(onSubmit)}>

            <div>
                <p>Имя:</p>
                <input
                    {...register("name")}
                    type="text" />
            </div>
            <div>
                <p>Врач:</p>
                <select
                    className={style.doctors}
                    {...register("doctor")}
                    type="text" >
                    <option></option>
                    {/*{elementsDoctors}*/}
                </select>
            </div>
            <div>
                <p>Дата:</p>
                <input
                    {...register("date")}
                    type="date" />
            </div>
            <div>
                <p>Жалобы:</p>
                <input
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