import s from './edit.module.css'
import { useForm } from "react-hook-form";
import {useState} from "react";
import {Redirect} from "react-router";




const EditWindow = (props) => {
    const [edit, setEdit] = useState(false)
    const onSubmit = (formData) => {
        props.changeReception(formData.name, formData.nameDoc, formData.date, formData.complaints, props.receptionsForEdit.id)
    };
    const { register, handleSubmit } = useForm();
    return (<div className={s.main}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <header className={s.title}> <h1> Изменить прием</h1></header>
            <main className={s.mainEdit}>
                <div>
                    <p>Имя </p>
                    <input
                        {...register("name")}
                        defaultValue={props.receptionsForEdit.name}
                        className={s.inputs}
                        type="text" />
                </div>
                <div>
                    <p>Врач:</p>
                    <input
                        {...register("nameDoc")}
                        defaultValue={props.receptionsForEdit.nameDoc}
                        className={s.inputs}
                        type="text"/>
                </div>
                <div>
                    <p>Дата </p>
                    <input
                        {...register("date")}
                        defaultValue={props.receptionsForEdit.date}
                        className={s.inputs}
                        type="date" />
                </div>
                <div>
                    <p>Жалобы </p>
                    <input
                        {...register("complaints")}
                        defaultValue={props.receptionsForEdit.complaints}
                        className={s.inputs}
                        type="text" />
                </div>
            </main>
<div className={s.submits}>
    <input
        onClick={()=>{
            setEdit(!edit)
        }}
        className={s.cancel}
        defaultValue={'Cancel'}
        />
    <input
        onClick={()=>{
            // setEdit(!edit)
        }}
        className={s.save}
        defaultValue={'Save'}
        type="submit"

    />
</div>
            {edit ?
            <Redirect to={'/reception'} />:
            null}
        </form>


    </div>
    )

}

export default EditWindow