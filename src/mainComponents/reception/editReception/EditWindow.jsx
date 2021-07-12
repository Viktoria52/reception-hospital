import s from './edit.module.css'
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {Redirect} from "react-router";
import {connect, useSelector} from "react-redux";
import {changeReception} from "../../../state/reception";

const EditWindow = (props) => {
    const {reception, idEditPost, name, nameDoc, date, complaints, id} = useSelector((state) => state.receptionReducer)
    const {docs} = useSelector((state) => state.docReducer)
    console.log(complaints)
    const [rec, newRec] = useState([name, nameDoc, date, complaints, id]);

    const [edit, setEdit] = useState(false)
    useEffect(() => {
        newRec(rec)
        console.log('rerender')
    }, [name, nameDoc, date, complaints, id])
    const onSubmit = async (formData) => {
        await props.changeReception(formData.name, formData.nameDoc, formData.date, formData.complaints, id)
        // await props.getReceptions()

        setEdit(!edit)
    };

    let docArray = docs || [];
    let elementsDoctors = docArray.map(p => <option key={p._id}>{p.name}</option>)

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
                        <select
                            className={s.nameDoc}
                            {...register("nameDoc")}
                            type="text">
                            {elementsDoctors}
                        </select>
                        {/*<input*/}
                        {/*    {...register("nameDoc")}*/}
                        {/*    defaultValue={nameDoc}*/}
                        {/*    className={s.inputs}*/}
                        {/*    type="text"/>*/}
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
                        type="submit"
                        defaultValue={'Save'}
                    />
                </div>
                {edit ?
                    <Redirect to={'/reception'}/> : null
                }
            </form>


        </div>
    )

}

export default connect(null, {changeReception})(EditWindow)