import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import style from './sort.module.css'
import {useDispatch, useSelector} from "react-redux";
import {sortValueAC, triage} from "../../../state/sort";
import {getReceptions, getSortData, getSortName, getSortNameDoc} from "../../../state/reception";


const Sort = () => {
    let dateFromReg = ''
    let dateToReg = ''
    const {reception} = useSelector(state => state.receptionReducer)
    const {valueOption, valueSorting} = useSelector(state => state.sortReducer)
    const dispatch = useDispatch()

    // const [flag, setFlag] = useState() // sort by name
    // const [docSort, setFlagDoc] = useState() // sort by doc

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
    }, [valueOption]);


    let resultName = valueOption === "name"
    let resultDoc = valueOption === "doc"
    let resultDate = valueOption === "date"

    async function sortNames(e) { //сортировка имен и врачей
        let text = await e.target.value
        await dispatch(triage(text))
        if (valueSorting) {
            if (valueOption === 'name') {
                dispatch(getSortName(valueSorting)) //name
            }
            if (valueOption === 'doc') {
                dispatch(getSortNameDoc(valueSorting)) //doctors
            }
        }


        // if (text === "none") {
        //     dispatch(triage(''))
        // }
        // if (resultName) {
        //     if (valueSorting === 'ascending') {
        //         setFlag(true)
        //     }
        //     if (valueSorting === 'decreasing') {
        //         setFlag(false)
        //     }
        // }
        // if (resultDoc) {
        //     if (valueSorting === 'ascending') {
        //         setFlagDoc(true)
        //     }
        //     if (valueSorting === 'decreasing') {
        //         setFlagDoc(false)
        //     }
        // }
    }
    const {register, handleSubmit} = useForm();
    return (
        <div className={style.sorting}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.containerSortingBy}>
                    <p className={style.sortBy}>Сортировать по:</p>
                    <select className={style.select} onChange={handleChange}>
                        <option value="no_value"/>
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
                            <option value="no_value"/>
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