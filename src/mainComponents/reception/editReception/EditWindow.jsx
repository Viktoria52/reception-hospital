import s from './edit.module.css'
import {useForm} from "react-hook-form";
import {useState} from "react";
import {Redirect} from "react-router";
import {changeReception} from "../../../state/reception";
import {useSelector} from "react-redux";

const EditWindow = () => {
    const {reception, idEditPost,name,nameDoc,date,complaints,id} = useSelector((state) => state.receptionReducer)
    // console.log(reception)
    // console.log(idEditPost)
// let a = reception.filter((value)=> value === idEditPost)
//     console.log(name,nameDoc,date,complaints,id)
    const [edit, setEdit] = useState(false)

    const onSubmit = async (formData) => {
        await changeReception(formData.name, formData.nameDoc, formData.date, formData.complaints, id)
        // await props.getReceptions()
        setEdit(!edit)
    };
    // console.log(reception)
    const {register, handleSubmit} = useForm();
    return (<div className={s.main}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <header className={s.title}><h1> Изменить прием</h1></header>
                <main className={s.mainEdit}>
                    <div>
                        <p>Имя </p>
                        <input
                            {...register("name")}
                            defaultValue={name}
                            className={s.inputs}
                            type="text"/>
                    </div>
                    <div>
                        <p>Врач:</p>
                        <input
                            {...register("nameDoc")}
                            defaultValue={nameDoc}
                            className={s.inputs}
                            type="text"/>
                    </div>
                    <div>
                        <p>Дата </p>
                        <input
                            {...register("date")}
                            defaultValue={date}
                            className={s.inputs}
                            type="date"/>
                    </div>
                    <div>
                        <p>Жалобы </p>
                        <input
                            {...register("complaints")}
                            defaultValue={complaints}
                            className={s.inputs}
                            type="text"/>
                    </div>
                </main>
                <div className={s.submits}>
                    <input
                        onClick={() => {
                            setEdit(!edit)
                        }}
                        className={s.cancel}
                        defaultValue={'Cancel'}
                    />
                    <input

                        className={s.save}
                        defaultValue={'Save'}
                        type="submit"

                    />
                </div>
                {edit ?
                    <Redirect to={'/reception'}/> :
                    null}
            </form>


        </div>
    )

}

export default EditWindow