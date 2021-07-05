import s from './edit.module.css'
import { useForm } from "react-hook-form";
// import Docs from '../../../common/docs';


const EditWindow = (props) => {
    const onSubmit = (formData) => {

    };
    const { register, handleSubmit } = useForm();
    return (<div className={s.main}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <header> <h1> Изменить прием</h1></header>
            <main className={s.mainEdit}>
                <div>Имя
                    <input className={s.inputs} type="text" />
                </div>
                <div>Врач:
                    {/*<Docs /> */}
                </div>
                <div>Дата
                    <input className={s.inputs} type="date" />
                </div>
                <div>Жалобы
                    <input className={s.inputs} type="text" />
                </div>
            </main>


        </form>


    </div>
    )

}

export default EditWindow