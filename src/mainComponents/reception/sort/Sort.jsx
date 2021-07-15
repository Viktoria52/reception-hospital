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
    console.log(valueOption, valueSorting)
    const dispatch = useDispatch()
    // const [rec, newRec] = useState(reception);

    // useEffect(() => {
    //     newRec(reception);
    // }, [reception])

    const [flag, setFlag] = useState() // sort by name
    const [docSort, setFlagDoc] = useState() // sort by doc
    // const [flagDate, setFlagDate] = useState(false) // sort by date

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
        console.log(text)
        if (valueSorting) {
            if (valueOption === 'name') {
                dispatch(getSortName(valueSorting)) //name
            }
            if (valueOption === 'doc') {
                dispatch(getSortNameDoc(valueSorting)) //doctors
            }
        }


        if (text === "none") {
            dispatch(triage(''))
        }
        if (resultName) {
            if (valueSorting === 'ascending') {
                setFlag(true)
            }
            if (valueSorting === 'decreasing') {
                setFlag(false)
            }
        }
        if (resultDoc) {
            if (valueSorting === 'ascending') {
                setFlagDoc(true)
            }
            if (valueSorting === 'decreasing') {
                setFlagDoc(false)
            }
        }
    }


    // if (docSort === true) { // sort by doc
    //     console.log('возрастание')
    //     reception.sort(function (a, b) {
    //             let nameA = a.nameDoc.toLowerCase(), nameB = b.nameDoc.toLowerCase();
    //             if (nameA < nameB)
    //                 return -1;
    //             if (nameA > nameB)
    //                 return 1;
    //             return 0;
    //         }
    //     )
    // }
    //
    // if (docSort === false) { // sort by doc
    //     console.log('убывание')
    //     reception.sort(function (a, b) {
    //             let nameA = a.nameDoc.toLowerCase(), nameB = b.nameDoc.toLowerCase();
    //             if (nameA < nameB)
    //                 return 1;
    //             if (nameA > nameB)
    //                 return -1;
    //             return 0;
    //         }
    //     )
    // }
    // if (flag === true) {// sort by name
    //     console.log('возрастание')
    //     reception.sort(function (a, b) {
    //             let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
    //             if (nameA < nameB)
    //                 return -1;
    //             if (nameA > nameB)
    //                 return 1;
    //             return 0;
    //         }
    //     )
    //     // console.log(props.reception)
    // }
    // if (flag === false) { // sort by name
    //     console.log('убывание')
    //     reception.sort(function (a, b) {
    //             let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
    //             if (nameA < nameB)
    //                 return 1;
    //             if (nameA > nameB)
    //                 return -1;
    //             return 0;
    //         }
    //     )
    //     // console.log(props.reception)
    // }

// console.log(props.reception)
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