import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import style from './sort.module.css'
import {useDispatch, useSelector} from "react-redux";
import {sortValueAC} from "../../../state/sortReducer";
import {getReceptions, getSortData, getSortName, getSortNameDoc} from "../../../state/receptionReducer";


const Sort = () => {
    let dateFromReg = ''
    let dateToReg = ''
    const {valueOption} = useSelector(state => state.sortReducer)
    const dispatch = useDispatch()


    const onSubmit = (formData) => {
        dateFromReg = formData.dateFrom
        dateToReg = formData.dateTo
        dispatch(getSortData(dateFromReg, dateToReg)) //date!
    };

    function handleChange(e) {
        let text = e.target.value
        dispatch(sortValueAC(text)) //сохранение значения сортировки name/docname/date в valueOption
    }

    useEffect(() => {
        if (valueOption === 'none') { // сброс фильтрации даты
            dispatch(getReceptions())
        }
    }, [valueOption, dispatch]);

    let resultName = valueOption === "name"
    let resultDoc = valueOption === "doc"
    let resultDate = valueOption === "date"

    function sortNames(e) { //сортировка имен и врачей
        let text = e.target.value
        sorting(text)

    }
function sorting(text){
    if (text) {
        if (valueOption === 'name') {
            dispatch(getSortName(text)) //name
        }
        if (valueOption === 'doc') {
            dispatch(getSortNameDoc(text)) //doctors
        }
    }
}
    const {register, handleSubmit} = useForm();
    return (
        <div className={style.sorting}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.containerSortingBy}>
                    <p className={style.sortBy}>Сортировать по:</p>
                    <select className={style.select} onChange={handleChange}>
                        <option />
                        <option value="name">Имя</option>
                        <option value="doc">Врач</option>
                        <option value="date">Дата</option>
                        <option value="none">None</option>
                    </select>
                </div>

                {resultName || resultDoc ?
                    <div className={style.direction}>
                        <span className={style.directionSpan}>Направление: </span>
                        <select className={style.directionSelect} onChange={sortNames}>
                            <option/>
                            <option value="ascending">По возрастанию</option>
                            <option value="decreasing">По убыванию</option>
                        </select>
                    </div> :
                    null}

                {resultDate ?
                    <div className={style.direction}>
                        <div>
                            <span>  с:</span>
                            <input className={style.date} {...register("dateFrom")} type="date"/></div>

                        <div>
                            <span> по:</span>
                            <input className={style.date2} {...register("dateTo")} type="date"/>
                        </div>
                        <input className={style.filterButton} type="submit" value='Фильтровать'/>
                    </div> :
                    null

                }


            </form>
        </div>
    )
}

export default Sort