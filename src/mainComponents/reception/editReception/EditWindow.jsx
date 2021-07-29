import s from './edit.module.css'
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import {changeReception} from "../../../state/receptionReducer";
import Preloader from "../../../assets/Preloader";
import {setEditMode} from "../../../state/actions/receptionAC";

const EditWindow = () => {
    const { name, nameDoc, date, complaints, id,preloader} = useSelector((state) => state.receptionReducer)
    const {docs} = useSelector((state) => state.docReducer)

    const [rec, newRec] = useState([name, nameDoc, date, complaints, id]);

    const dispatch = useDispatch()

    useEffect(() => {
        newRec(rec)
    }, [name, nameDoc, date, complaints, id, rec])

    const onSubmit = async (formData) => {
        await dispatch(changeReception(formData.name, formData.nameDoc, formData.date, formData.complaints, id))
        dispatch(setEditMode(false))
    };

    let docArray = docs || [];
    let elementsDoctors = docArray.map(p => <option key={p._id}>{p.name}</option>)

    const {register, handleSubmit} = useForm();
    return (<div className={s.containerEdit}>
            {preloader &&
            <Preloader />}
        <div className={s.main}>
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
                        <select
                            className={s.nameDoc}
                            {...register("nameDoc")}
                            type="text">
                            {elementsDoctors}
                        </select>
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
                            dispatch(setEditMode(false))
                        }}
                        className={s.cancel}
                        defaultValue={'Cancel'}
                    />
                    <input
                        className={s.save}
                        type="submit"
                        defaultValue={'Save'}
                    />
                </div>
            </form>


        </div>
    </div>

    )

}

export default EditWindow